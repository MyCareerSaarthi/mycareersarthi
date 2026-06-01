FROM node:22-alpine AS base

# Stage 1: Install building dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build the Next.js app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Install production dependencies only
FROM base AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Stage 4: Production runner image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# If .env is used directly in start script, copy it
COPY --from=builder /app/.env ./.env

EXPOSE 3000

CMD ["npm", "run", "start"]
# MyCareerSarthi - Frontend Architecture Documentation

## Tech Stack

- **Frontend Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS with Shadcn UI components
- **Authentication**: Built-in auth system
- **State Management**: React Context API
- **Routing**: Next.js App Router

## Project Structure

```
client/
├── src/
│   ├── app/                 # Next.js app directory (main application code)
│   │   ├── (auth)/         # Authentication related pages
│   │   ├── (linkedin)/     # LinkedIn integration features
│   │   ├── dashboard/      # User dashboard pages
│   │   ├── pricing/        # Pricing related pages
│   │   ├── profile/        # User profile management
│   │   └── report/         # Report generation and viewing
│   ├── components/         # Reusable React components
│   │   ├── home/          # Homepage specific components
│   │   ├── layout/        # Layout components
│   │   ├── navbar-04/     # Navigation components
│   │   ├── report/        # Report-related components
│   │   ├── ui/            # UI component library
│   │   └── user/          # User-related components
│   └── lib/               # Utility functions and shared logic
```

## Core Features and Workflows

### 1. Authentication Flow

- User registration and login through the (auth) route group
- Protected routes using middleware.js
- Session management and user state persistence

### 2. Dashboard Experience

- Centralized dashboard for user activities
- Quick access to reports and profile management
- Integration with LinkedIn data (optional)

### 3. Report Generation

- User data collection and analysis
- Report generation based on user inputs
- Interactive report viewing interface

### 4. Profile Management

- User profile creation and updates
- Professional information management
- LinkedIn profile integration

## Component Architecture

### Layout Components

- Consistent UI shell across pages
- Navigation and footer components
- Theme provider for dark/light mode support

### Feature Components

1. **Home Components**

   - Landing page sections
   - Feature showcases
   - Testimonials

2. **Report Components**

   - Report generation forms
   - Report visualization
   - Download and sharing capabilities

3. **User Components**
   - Profile management interface
   - Settings and preferences
   - Account management

## Data Flow

1. **User Authentication**

   ```
   Login/Register → Middleware Validation → Protected Routes
   ```

2. **Report Generation**

   ```
   User Input → Data Processing → Report Generation → Report Display
   ```

3. **Profile Updates**
   ```
   Profile Form → Data Validation → State Update → Database Update
   ```

## State Management

- React Context API for global state management
- Local component state for UI-specific states
- Server-side state management through Next.js

## Routing Structure

- App Router based navigation
- Route groups for feature organization
- Dynamic routes for user-specific content

## Security Considerations

1. **Authentication**

   - Protected routes
   - Session management
   - CSRF protection

2. **Data Protection**
   - Input validation
   - XSS prevention
   - Secure data transmission

## Performance Optimization

1. **Code Splitting**

   - Component-level code splitting
   - Route-based splitting
   - Dynamic imports

2. **Asset Optimization**
   - Image optimization
   - Static file caching
   - CDN integration

## Development Workflow

1. **Local Development**

   ```
   npm run dev → Local testing → Code review
   ```

2. **Deployment**
   ```
   Build → Test → Deploy → Monitor
   ```

## Future Considerations

1. **Scalability**

   - Microservices architecture
   - Serverless functions
   - Database scaling

2. **Feature Expansion**
   - Additional report types
   - Enhanced analytics
   - Mobile application

## Best Practices

1. **Code Organization**

   - Component modularity
   - Clear file naming
   - Consistent directory structure

2. **Development Standards**
   - ESLint configuration
   - Prettier formatting
   - Git workflow

## Conclusion

This architecture is designed to be scalable, maintainable, and efficient. It follows modern web development practices while keeping the codebase organized and manageable.

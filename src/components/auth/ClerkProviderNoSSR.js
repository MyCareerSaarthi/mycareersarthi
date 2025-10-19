import dynamic from "next/dynamic";

const ClerkProviderNoSSR = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkProvider),
  { ssr: false }
);

export default ClerkProviderNoSSR;

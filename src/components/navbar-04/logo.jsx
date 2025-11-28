import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/logo.svg"
      alt="MyCareerSarthi Logo"
      width={124}
      height={32}
      className="h-8 w-auto"
      priority
    />
  </Link>
);

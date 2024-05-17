import Image from "next/image";
import { SignInButton } from "@/components/signin";

export default function Home() {
  return (
    <main>
      <div className="max-w-10">
        <Image
          src="/logo.svg"
          alt="logo"
          width={800}
          height={800}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1>Landing page</h1>
      <SignInButton />
    </main>
  );
}

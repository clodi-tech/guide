import Image from "next/image";
import { SignInGoogle, SignInGithub } from "./ui/buttons";

export default function Home() {
  return (
    <main>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <SignInGoogle />
      <SignInGithub />
    </main>
  );
}

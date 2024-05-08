import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <button className="btn btn-primary">primary</button>
      <button className="btn btn-secondary">secondary</button>
    </main>
  );
}

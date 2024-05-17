import Image from "next/image";

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
      <p>setup logo</p>
    </main>
  );
}

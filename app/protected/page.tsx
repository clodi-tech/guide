import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        This page is protected. You can only see this page if you are signed in.
      </p>
    </div>
  );
}

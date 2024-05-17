import { auth } from "@/auth";
import CheckoutButton from "@/components/checkout";
import { SignInButton } from "@/components/signin";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return;
  <div>
    <h1>Protected Page</h1>
    <SignInButton />
  </div>;

  return (
    <div>
      <p>Welcome, {session.user.name}</p>
      <CheckoutButton />
    </div>
  );
}

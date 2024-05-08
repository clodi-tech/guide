import { signIn } from "@/auth";

export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button className="btn btn-primary" type="submit">
        Signin with Google
      </button>
    </form>
  );
}

export function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button className="btn btn-secondary" type="submit">
        Signin with GitHub
      </button>
    </form>
  );
}

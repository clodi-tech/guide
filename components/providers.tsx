import { signIn } from "@/auth";

export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="btn btn-primary">
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
      <button type="submit" className="btn btn-secondary">
        Signin with GitHub
      </button>
    </form>
  );
}

export function SignInMagic() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" className="input" />
      <button type="submit" className="btn btn-neutral">
        Signin with Email
      </button>
    </form>
  );
}

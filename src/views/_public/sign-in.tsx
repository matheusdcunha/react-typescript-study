import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/sign-in")({
  component: SignIn,
  head: () => ({
    meta: [
      {
        title: "Sign-in",
      },
    ],
  }),
});

function SignIn() {
  return <div>Hello "/_public/sign-in"!</div>;
}

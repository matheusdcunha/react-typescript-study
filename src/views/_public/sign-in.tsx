import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/sign-in")({
  component: SigInView,
  head: () => ({
    meta: [
      {
        title: "Sign-in",
      },
    ],
  }),
});

function SigInView() {
  return <div>Hello "/_public/sign-in"!</div>;
}

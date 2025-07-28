import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

const checkAuth = () => {
  const token = sessionStorage.getItem("authToken");
  return !!token;
};

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ location }) => {
    if (!checkAuth()) {
      throw redirect({
        to: "/",
        search: {
          // Guarda a URL que o usuário tentou acessar para redirecioná-lo de volta.
          redirect: location.href,
        },
      });
    }
  },
  component: LayoutPrivate,
});

function LayoutPrivate() {
  return (
    <div className="bg-zinc-200 w-full h-screen">
      <Outlet />
    </div>
  );
}

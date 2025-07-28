import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: Layout,
});

function Layout() {
  return (
    <div className="bg-zinc-200 w-full h-screen flex flex-row items-center justify-center">
      <Outlet />
    </div>
  );
}

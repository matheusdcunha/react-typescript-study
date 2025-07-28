import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-zinc-200 w-full h-screen flex flex-row items-center justify-center">
      <Outlet />
    </div>
  );
}

import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "@/route-tree.gen";
import { Toaster } from "./components/ui/sonner";

const router = createRouter({ routeTree });

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

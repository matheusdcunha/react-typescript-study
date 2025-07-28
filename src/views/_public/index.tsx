//Roteamento
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
//Componentes
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1 } from "@/components/ui/typography-h1";

const signInSearchSchema = z.object({
  redirect: z.string().optional().catch(undefined),
});

export const Route = createFileRoute("/_public/")({
  component: Index,
  validateSearch: search => {
    return signInSearchSchema.parse(search);
  },
  head: () => ({
    meta: [
      {
        title: "Login | Portal do Aluno",
      },
    ],
  }),
});

function Index() {
  const navigate = useNavigate();
  const { redirect } = Route.useSearch();

  const toastHandle = (e: FormEvent) => {
    e.preventDefault();

    const myPromise = new Promise<{ name: string }>(resolve => {
      setTimeout(() => {
        sessionStorage.setItem("authToken", "seu-token-de-exemplo");
        resolve({ name: "Usuário 01" });
        navigate({ to: redirect || "/home" });
      }, 3000);
    });

    toast.promise(myPromise, {
      loading: "Validando usuário...",
      success: (data: { name: string }) => {
        return {
          message: `${data.name} foi validado com sucesso!`,
        };
      },
      error: "Error",
    });
  };

  return (
    <div className="w-full max-w-sm flex flex-col">
      <TypographyH1 className="flex justify-center mb-8">
        Portal do Aluno
      </TypographyH1>
      <Card>
        <CardHeader>
          <CardTitle>Acesse sua conta</CardTitle>
          <CardDescription>
            Informe seus dados abaixo para entra em sua conta.
          </CardDescription>
          <CardAction className="ml-4">
            <Link to="/register">
              <Button
                variant="default"
                className="cursor-pointer bg-blue-500 hover:bg-blue-600">
                Cadastre-se
              </Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input id="password" type="password" required />
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            variant="default"
            className="w-full h-12 cursor-pointer bg-slate-950"
            onClick={toastHandle}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

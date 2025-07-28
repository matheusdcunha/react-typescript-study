//Roteamento
import { createFileRoute, Link } from "@tanstack/react-router";

//Componentes
import { toast } from "sonner";
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

export const Route = createFileRoute("/_public/")({
  component: Index,
});

function Index() {
  const toastHandle = () => {
    const myPromise = new Promise<{ name: string }>(resolve => {
      setTimeout(() => {
        resolve({ name: "Usuário 01" });
      }, 3000);
    });

    toast.promise(myPromise, {
      loading: "Validando usuário...",
      success: (data: { name: string }) => {
        return {
          message: `${data.name} foi validado com sucesso.`,
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
            <Button variant="link" className="cursor-pointer">
              Registre-se
            </Button>
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

              <Link to="/forgot-password">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input id="password" type="password" required />
                  <a
                    href="./"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Esqueceu sua senha?
                  </a>
                </div>
              </Link>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            variant="default"
            className="w-full h-12 cursor-pointer"
            onClick={toastHandle}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

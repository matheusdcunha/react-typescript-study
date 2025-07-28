//Roteamento
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
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

export const Route = createFileRoute("/_public/register")({
  component: RegisterView,
  head: () => ({
    meta: [
      {
        title: "Registro | Xebec",
      },
    ],
  }),
});

function RegisterView() {
  const toastHandle = () => {
    const myPromise = new Promise<{ name: string }>(resolve => {
      setTimeout(() => {
        resolve({ name: "Usuário" });
      }, 3000);
    });

    toast.promise(myPromise, {
      loading: "Validando usuário...",
      success: (data: { name: string }) => {
        return {
          message: `Conta criada com sucesso!`,
        };
      },
      error: "Error",
    });
  };

  return (
    <div className="w-full max-w-sm flex flex-col">
      <TypographyH1 className="flex justify-center mb-8">
        Cadastre-se
      </TypographyH1>
      <Card>
        <CardHeader>
          <CardAction className="justify-self-start">
            <Link to="/">
              <Button
                variant="outline"
                className="cursor-pointer mb-6 hover:bg-zinc-200">
                <ArrowLeft />
                Voltar
              </Button>
            </Link>
          </CardAction>
          <CardTitle className="col-start-2">Crie sua conta</CardTitle>
          <CardDescription className="col-start-2">
            Informe seus dados abaixo para poder criar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" type="text" placeholder="John" required />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="111.111.111-11"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="birthday">Data de Nascimento</Label>
                  <Input
                    id="birthday"
                    type="text"
                    placeholder="11/11/1111"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">E-mail</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
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
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

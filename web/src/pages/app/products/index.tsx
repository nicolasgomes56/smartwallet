import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";
import { AddProductDialog } from "./add-product-dialog";

export function Products() {
  return (
    <>
      <Helmet title="Produtos" />
      <div className="flex flex-col gap-4 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                Adicionar
                <Plus className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <AddProductDialog />
          </Dialog>
        </div>

        <div className="space-y-2.5">
          <div className="font-poppins grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <img
                  src="https://loja.elements.com.br/cdn/shop/files/cadeira-de-escritorio-ergonomica-elements-astra-preta-01_8098983e-6628-43ee-8576-1181e17b5337.png?v=1718046941&width=800"
                  className="rounded-t-lg object-contain"
                />
                <CardHeader>
                  <CardTitle className="text-lg">
                    Cadeira Ergonômica Elements Astra
                  </CardTitle>
                  <CardDescription>
                    <p></p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between gap-4">
                  <span className="rounded-sm border border-violet-500/50 p-2 text-lg font-bold transition-colors hover:bg-accent">
                    R$ 899,00
                  </span>
                  <Button variant="ghost">Visualizar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

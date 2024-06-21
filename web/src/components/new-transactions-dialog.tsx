import bbLogo from "@/assets/images/bb.png";
import itauLogo from "@/assets/images/itau.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  CarFront,
  DollarSign,
  Italic,
  Popcorn,
  ShoppingCart,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Toggle } from "./ui/toggle";

export function NewTransactionsDialog() {
  const [date, setDate] = useState<Date>();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicionar transação</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para adicionar uma nova transação.
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Toggle
              aria-label="Toggle italic"
              variant="outline"
              className="data-[state=on]:bg-emerald-500"
              onPressedChange={(value) => console.log(value)}
            >
              <Italic className="mr-2 h-4 w-4" />
              Receita
            </Toggle>
            <Toggle
              aria-label="Toggle italic"
              variant="outline"
              className="data-[state=on]:bg-red-500"
            >
              <Italic className="mr-2 h-4 w-4" />
              Despesas
            </Toggle>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex-1 text-left">
              <Label htmlFor="valor">Valor da receita</Label>
              <input
                className="w-full bg-transparent text-left text-3xl font-bold outline-none lg:text-4xl"
                id="amount"
                inputMode="numeric"
                type="text"
                value=""
                placeholder="R$ 0,00"
                name="amount"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="category">Categoria</Label>
            <Select defaultValue="outros">
              <SelectTrigger className="h-auto">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alimentacao">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <Utensils className="w-4 text-amber-500" />
                      </div>
                      Alimentação
                    </div>
                  </SelectItem>
                  <SelectItem value="transporte">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <CarFront className="w-4 text-lime-500" />
                      </div>
                      Transporte
                    </div>
                  </SelectItem>
                  <SelectItem value="lazer">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <Popcorn className="w-4 text-emerald-500" />
                      </div>
                      Lazer
                    </div>
                  </SelectItem>
                  <SelectItem value="educacao">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <Popcorn className="w-4 text-violet-500" />
                      </div>
                      Educação
                    </div>
                  </SelectItem>
                  <SelectItem value="mercado">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <ShoppingCart className="w-4 text-orange-500" />
                      </div>
                      Mercado
                    </div>
                  </SelectItem>
                  <SelectItem value="outros">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <DollarSign className="w-4 text-zinc-500" />
                      </div>
                      Outros
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Conta</Label>
            <Select>
              <SelectTrigger className="h-14">
                <SelectValue placeholder="Selecione uma conta" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="itau">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <img src={itauLogo} className="rounded-md" />
                      </div>
                      Itau
                    </div>
                  </SelectItem>
                  <SelectItem value="bancoBrasil">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent dark:bg-accent/40">
                        <img src={bbLogo} className="rounded-md" />
                      </div>
                      Banco do Brasil
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Data</Label>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-center text-center font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "dd/MM/yyyy")
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </form>
    </DialogContent>
  );
}

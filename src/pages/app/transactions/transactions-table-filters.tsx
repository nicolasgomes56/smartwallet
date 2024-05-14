import { Search, Utensils, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function TransactionsTableFilters() {
  const { handleSubmit, control } = useForm({})

  function handleFilter() {
    console.log('filter')
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros:</span>

      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        // {...register('orderId')}
      />

      <Input
        placeholder="Nome da transação"
        className="h-8 w-[320px]"
        // {...register('customerName')}
      />

      <Controller
        name="categories"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  <Utensils className="w-5 text-amber-500" />
                  Todas as categorias
                </SelectItem>
                <SelectItem value="food">Alimentação</SelectItem>
                <SelectItem value="shopping">Compras</SelectItem>
                <SelectItem value="studies">Estudos</SelectItem>
                <SelectItem value="leisure">Lazer</SelectItem>
                <SelectItem value="others">Outros</SelectItem>
                <SelectItem value="health">Saúde</SelectItem>
                <SelectItem value="transport">Transporte</SelectItem>
                <SelectItem value="travel">Viagem</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />
      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        // onClick={handleClearFilters}
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}

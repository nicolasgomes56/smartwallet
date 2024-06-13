import {
  Car,
  DollarSign,
  GraduationCap,
  Plane,
  Popcorn,
  Search,
  ShoppingBasket,
  Stethoscope,
  Utensils,
  X,
} from 'lucide-react'
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
        placeholder="ID da transação"
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
              <SelectTrigger className="h-8 w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas categorias</SelectItem>
                <SelectItem value="food">
                  <div className="flex items-center">
                    <Utensils className="mr-2 h-4 w-4" />
                    Alimentação
                  </div>
                </SelectItem>
                <SelectItem value="shopping">
                  <div className="flex items-center">
                    <ShoppingBasket className="mr-2 h-4 w-4" />
                    Compras
                  </div>
                </SelectItem>
                <SelectItem value="studies">
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Estudos
                  </div>
                </SelectItem>
                <SelectItem value="leisure">
                  <div className="flex items-center">
                    <Popcorn className="mr-2 h-4 w-4" />
                    Lazer
                  </div>
                </SelectItem>
                <SelectItem value="others">
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Outros
                  </div>
                </SelectItem>
                <SelectItem value="health">
                  <div className="flex items-center">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Saúde
                  </div>
                </SelectItem>
                <SelectItem value="transport">
                  <div className="flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    Transporte
                  </div>
                </SelectItem>
                <SelectItem value="travel">
                  <div className="flex items-center">
                    <Plane className="mr-2 h-4 w-4" />
                    Viagem
                  </div>
                </SelectItem>
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

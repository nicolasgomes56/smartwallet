import { Utensils } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { TransactionsTableFilters } from './transactions-table-filters'

export function Transactions() {
  return (
    <>
      <Helmet title="Transactions" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transações</h1>

        <div className="space-y-2.5">
          <TransactionsTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Identificador</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Data da transação</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell>Tipo</TableCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>Teste</TableCell>
                    <TableCell>14/05/2024</TableCell>
                    <TableCell className="flex gap-2 text-center font-semibold">
                      <Utensils className="w-5 text-amber-500" />
                      Alimentação
                    </TableCell>
                    <TableCell>R$ 20,00</TableCell>
                    <TableCell>Despesa</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination
            pageIndex={0}
            totalCount={100}
            rowsPerPage={10}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </>
  )
}

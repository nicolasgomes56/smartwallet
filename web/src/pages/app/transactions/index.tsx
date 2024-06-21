import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { TransactionsTableFilters } from './transactions-table-filters'

export function Transactions() {
  return (
    <>
      <Helmet title="Transações" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transações</h1>

        <div className="space-y-2.5">
          <TransactionsTableFilters />
          {/* <NewTransactionsDialog /> */}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Identificador</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Data da transação</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Tipo</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-mono text-xs font-medium">{`transaction-${i + 1}`}</TableCell>
                    <TableCell className="font-medium">{`Transação ${i + 1}`}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date().toLocaleDateString()}
                    </TableCell>
                    <TableCell>Alimentação</TableCell>
                    <TableCell className="text-muted-foreground">
                      R$ 100,00
                    </TableCell>
                    <TableCell className="text-sm font-semibold">
                      {i % 2 === 0 ? (
                        <span className="text-green-500">Receita</span>
                      ) : (
                        <span className="text-rose-400">Despesa</span>
                      )}
                    </TableCell>
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

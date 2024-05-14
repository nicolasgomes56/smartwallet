import { Wallet } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PopularCategories } from './popular-categories'
import { TransactionsChart } from './transactions-chart'

export function Home() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-1 flex-col gap-4 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div>
          <p className="text-muted-foreground">Saldo em contas</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            R$ 0,00
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:grid-cols-12">
          <TransactionsChart />
          <PopularCategories />
        </div>

        <div className="items-start gap-4 space-y-4 md:flex md:space-y-0">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Faturas em aberto</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Saldo em contas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Wallet />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Carteira
                  </p>
                  <p className="text-sm font-bold">Teste</p>
                </div>

                <div className="space-y-1 text-right">
                  <p className="font-medium">R$&nbsp;0,00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

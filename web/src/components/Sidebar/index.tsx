import {
  ShoppingBag
} from 'lucide-react'

import { CurrencyCircleDollar, HandCoins, House, Money } from '@phosphor-icons/react'
import { NewTransactionsDialog } from '../new-transactions-dialog'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Profile } from './Profile'
import { NavLink } from './nav-link'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-muted-foreground/10 px-5 py-8">
      <div className="flex gap-4">
        <Money className="h-8 w-8" />
        <span className="flex items-center text-xl font-bold">SmartWallet</span>
      </div>
      <nav className="space-y-2">
        <NavLink to="/">
          <House className="h-6 w-6" />
          <span className="font-bold">Início</span>
        </NavLink>
        <NavLink to="/transactions">
          <CurrencyCircleDollar className="h-6 w-6" />
          Transações
        </NavLink>
        <NavLink to="/products">
          <ShoppingBag className="h-6 w-6" />
          Produtos
        </NavLink>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex h-12 w-full gap-2 rounded-lg border-violet-700"
              >
                <HandCoins className="h-6 w-6" />
                <span className="font-semibold">Nova transação</span>
              </Button>
            </DialogTrigger>

            <NewTransactionsDialog />
          </Dialog>
        </nav>

        <div className="h-px bg-muted-foreground" />

        <Profile />
      </div>
    </aside>
  )
}

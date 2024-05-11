import { CandlestickChart, Home, List, PiggyBank } from 'lucide-react'

import { NavLink } from './nav-link'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-muted-foreground/10 px-5 py-8">
      <div className="flex gap-4 ">
        <PiggyBank className="h-8 w-8" />
        <span className="flex items-center text-xl font-bold">SmartWallet</span>
      </div>
      <nav className="space-y-2">
        <NavLink to="/">
          <Home className="h-6 w-6" />
          <span className="font-bold ">Início</span>
        </NavLink>
        <NavLink to="/transactions">
          <CandlestickChart className="h-6 w-6" />
          Transações
        </NavLink>
        <NavLink to="/categories">
          <List className="h-6 w-6" />
          Categorias
        </NavLink>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <Profile />
      </div>
    </aside>
  )
}

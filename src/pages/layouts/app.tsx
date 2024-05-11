import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/Sidebar'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />

      <div className="px-8 pb-12 pt-8">
        <Outlet />
      </div>
    </div>
  )
}

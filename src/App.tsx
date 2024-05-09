import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="smartwallet-theme" defaultTheme="dark">
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

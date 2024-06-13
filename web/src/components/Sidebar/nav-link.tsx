import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-2 rounded-sm p-3 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground data-[current=true]:bg-violet-700 data-[current=true]:text-white"
      {...props}
    />
  )
}

import { User } from '@phosphor-icons/react'

import { Settings } from './Settings'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* <img
        src="http://github.com/nicolasgomes56.png"
        className="h-10 w-10 rounded-full"
        alt=""
      /> */}
      <User className="h-8 w-8 text-muted-foreground" />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-foreground">
          Nicolas Gomes
        </span>
        <span className="truncate text-sm text-muted-foreground">
          nicolasgomes56@gmail.com
        </span>
      </div>

      <Settings />
    </div>
  )
}

import { ReactNode } from "react"

type Listprops = {
    children : ReactNode
}
export default function List({children}:Listprops) {
  return(
    <ul>
      {children}
    </ul>
  )
}
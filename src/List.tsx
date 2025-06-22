import { Listprops } from "./types/types"

export default function List({children}:Listprops) {
  return(
    <ul>
      {children}
    </ul>
  )
}
type ItemProps ={
    content: string,
    name: string
}
export default function Item({content, name}:ItemProps) {
  return(
    <li>
        {content}-{name}
    </li>
  )
}
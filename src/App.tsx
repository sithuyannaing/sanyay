import { useState } from "react"
import List from "./List"
import Item from "./Item"
import Form from "./Form";

export default function App() {
  const [data,setData] = useState<any>([]);
  const add = (content:string, name:string) => {
    setData([...data,{content,name}])
  }

  return (
    <div>
      <h1>Sanyay</h1>
      <Form add={add}/>
      <List>
        {
          //need to set id or key
          data.map((item:any) => <Item content={item.content} name={item.name} />)
        }
      </List>
    </div>
  )
}
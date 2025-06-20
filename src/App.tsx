import { useState } from "react"
import List from "./List"
import Item from "./Item"
import Form from "./Form";

type Post = {
  id: number;
  content: string;
  name: string;
};

export default function App() {
  const [data,setData] = useState<Post[]>([]);
  const add = (content:string, name:string) => {
    let id = data[data.length - 1]?.id ? data[data.length - 1]?.id + 1 : 1;
    setData([...data,{id,content,name}]);
  }

  return (
    <div>
      <h1>Sanyay</h1>
      <Form add={add}/>
      <List>
        {
          data.map((item:{id: number,content:string, name:string}) => <Item key={item.id} content={item.content} name={item.name} />)
        }
      </List>
    </div>
  )
}
import { useState } from "react"


function Item({item,remove}:any) {
  return(
    <li>
      <span>
      {item.content} -<b>{item.name}</b>
      </span>
      <button onClick={() => remove(item.id)}>Delete</button>
    </li>
  )
}

function List({children}:any) {
  return(
    <ul>
      {children}
    </ul>
  )
}

export default function App() {
  const [data,setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);
  const remove = (id:any) => {
    setData(data.filter(item => item.id !== id));
  }
  return (
    <div>
      <h1>Sanyay</h1>
      <List>
        {
          data.map((item:any) => {
            return <Item key={item.id} item={item} remove={remove} />
          })
        }
      </List>
    </div>
  )
}
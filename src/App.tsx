import { useState } from "react"
import Item from "./components/Item"
import Form from "./components/Form";
import Header from "./components/Header";
import { useApp } from "./ThemedApp";
import { Box,Container } from "@mui/material";
import { Post } from "./types/types";



export default function App() {
  const [data,setData] = useState<Post[]>([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);
  const {showForm} = useApp();
  const add = (content:string, name:string) => {
    const id = data[data.length - 1]?.id ? data[data.length - 1]?.id + 1 : 1;
    setData([...data,{id,content,name}]);
  }
  const remove = (id: number) => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <Box sx={{ bgcolor: "banner" }}>
     <Header />
     <Container
        maxWidth="sm"
        sx={{ mt: 4 }}>
        {showForm && <Form add={add}/>}
        {
          data.map((item:{id: number,content:string, name:string}) => <Item key={item.id} item={item} remove={remove}/>)
        }
    </Container>
    </Box>
  )
}
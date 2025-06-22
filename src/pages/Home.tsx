import { useState } from "react";
import { useApp } from "../ThemedApp";
import { Box } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";
import { Post } from "../types/types";

export default function Home() {
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
        <Box>
            {showForm && <Form add={add}/>}
            {
            data.map((item:{id: number,content:string, name:string}) => <Item key={item.id} item={item} remove={remove}/>)
            }
        </Box>
    )
}
import { useEffect, useState } from "react";
import { useApp } from "../ThemedApp";
import { Alert, Box } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";
import { Post } from "../types/types";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "../ThemedApp";


export default function Home() {
    //const [data,setData] = useState<Post[]>([]);
    // const [isLoading,setIsLoading] = useState(true); 
    // const [error, setError] = useState(false);
    const api = import.meta.env.VITE_API;
    const { isLoading, isError, error, data } = useQuery("posts", async () => {
      
      const res = await fetch(`${api}/content/posts`);
      return res.json();
    });

      // useEffect(() => {
      //   const api = import.meta.env.VITE_API;
      //   fetch(`${api}/content/posts`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setData(data)
      //     setIsLoading(false);
      //   })
      //   .catch(() => setError(true));
      // },[])

        const {showForm} = useApp();

        const add = (content:string, name:string) => {
          const id = data[data.length - 1]?.id ? data[data.length - 1]?.id + 1 : 1;
          //setData([...data,{id,content,name}]);
        }
        const remove = useMutation(
          async (id:number) => {
            await fetch(`${api}/content/posts/${id}`, {
            method: "DELETE",
            });
          },
          {
          onMutate: id => {
          queryClient.cancelQueries("posts");
          queryClient.setQueryData("posts", (old:any) =>
          old.filter((item:any) => item.id !== id)
          );
          //setGlobalMsg("A post deleted");
          },
          }
        )

        if (error) {
        return (
        <Box>
        <Alert severity="warning">Cannot fetch data</Alert>
        </Box>
        );
        }

        if (isLoading) {
        return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
        }
    return (
        <Box>
            {showForm && <Form add={add}/>}
            {
            data.map((item:any) => <Item key={item.id} item={item} remove={remove.mutate}/>)
            }
        </Box>
    )
}
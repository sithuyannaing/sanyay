import { useApp } from "../ThemedApp";
import { Alert, Box } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "../ThemedApp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const api = import.meta.env.VITE_API;
export default function Home() {


    const { isLoading, isError, error, data } = useQuery("posts", async () => {
      
      const res = await fetch(`${api}/content/posts`);
      return res.json();
    });

        const {showForm, setGlobalMsg,auth,setAuth} = useApp();
        const navigate = useNavigate();
        
      useEffect(() => {
          if(auth) {
            navigate('/');
          }else{
            navigate('/login')
          }
      }, [auth]);

        const add = (content:string, name:string) => {
          const id = data[data.length - 1]?.id ? data[data.length - 1]?.id + 1 : 1;
          //setData([...data,{id,content,name}]);
          setGlobalMsg("An item added")
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
          setGlobalMsg("A post deleted");
          },
          }
        )

        if (isError) {
        return (
        <Box>
        <Alert severity="warning">{error.message}</Alert>
        </Box>
        );
        }

        if (isLoading) {
        return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
        }
    return (
        <Box>
            {showForm && auth && <Form add={add}/>}
            {
            auth && data.map((item:any) => <Item key={item.id} item={item} remove={remove.mutate}/>)
            }
        </Box>
    )
}
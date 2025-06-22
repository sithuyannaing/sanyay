import { useRef } from "react"
import { 
Box, 
TextField, 
Button,
} from "@mui/material";
import { FormProps } from "../types/types";



export default function Form({add}:FormProps) {
    //check - type inference don't work auto?
    const contentRef = useRef<HTMLInputElement>(null);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            const content = contentRef.current!.value;
            add(content,"alice")
            e.currentTarget.reset();
        }}>
        <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          sx={{ mb: 1 }}
        />
        <Button
          variant="contained"
          type="submit">
          Post
        </Button>
      </Box> 
        </form>
    )
}
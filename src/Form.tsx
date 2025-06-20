import { useRef } from "react"

type FormProps = {
  add: (content:string,name: string) => void;
};
export default function Form({add}:FormProps) {
    //check - type inference don't work auto?
    const contentVal = useRef<HTMLInputElement>(null);
    const nameVal = useRef<HTMLInputElement>(null);

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            const content = contentVal.current!.value;
            const name = nameVal.current!.value;
            add(content,name)
            e.currentTarget.reset();
        }}>
            <input ref={contentVal} type="text" placeholder="content" />
            <input ref={nameVal} type="text" placeholder="name" />
            <button type="submit">Post</button>
        </form>
    )
}
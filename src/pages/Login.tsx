import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useApp } from "../ThemedApp";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../libs/fetcher";
import { useRef } from "react";
import { useMutation } from "react-query";


export default function Login() {
	const usernameInput = useRef<HTMLInputElement>(null);
	const passwordInput = useRef<HTMLInputElement>(null);

	 const navigate = useNavigate();
	 const { setAuth } = useApp();

	 const handleSubmit = () => {
		const username =usernameInput.current!.value;
		const password =passwordInput.current!.value;
		if(!username || !password){
			alert('username or password is required.');
			return;
		}
		login.mutate({username,password})
	}
	const login = useMutation((data:{username:string,password:string}) => postLogin(data.username,data.password),{
		onError: async () => {
			console.log('login fail')
		},
		onSuccess: async (result) => {
			console.log(result,'result')
			setAuth(true);
			localStorage.setItem('isAuth',"true");
			navigate("/");
		}
	});
	return (
		<Box>
			<Typography variant="h3">Login</Typography>

			<Alert
				severity="warning"
				sx={{ mt: 2 }}>
				All fields required
			</Alert>

			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit();
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						mt: 2,
					}}>
					<TextField
						inputRef={usernameInput}
						placeholder="Username"
						fullWidth
					/>
					<TextField
						inputRef={passwordInput}
						type="password"
						placeholder="Password"
						fullWidth
					/>
					<Button
						type="submit"
						variant="contained"
						fullWidth>
						Login
					</Button>
				</Box>
			</form>
		</Box>
	);
}
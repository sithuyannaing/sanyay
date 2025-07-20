import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postUser } from "../libs/fetcher";

export default function Register() {
	const nameInput = useRef<HTMLInputElement>(null);
	const usernameInput = useRef<HTMLInputElement>(null);
	const bioInput = useRef<HTMLInputElement>(null);
	const passwordInput = useRef<HTMLInputElement>(null);

	const navigate = useNavigate();

	const handleSubmit = () => {
		const name = nameInput.current!.value;
		const username = usernameInput.current!.value;
		const bio = bioInput.current!.value;
		const password = passwordInput.current!.value;

		if (!name || !username || !password) {
		//setError("name, username and password required");
		return false;
		}
    
		create.mutate({ name, username, bio, password });
	}
	const create = useMutation(async (data:{name:string,username:string,bio:string,password:string}) => postUser(data), {
    onError: async () => {
      //setError("Cannot create account");
    },
    onSuccess: async user => {
      //setGlobalMsg("Account Created");
      navigate("/login");
    },
  	});
	return (
		<Box>
			<Typography variant="h3">Register</Typography>

			<Alert
				severity="warning"
				sx={{ mt: 2 }}>
				All fields required
			</Alert>

			<form  onSubmit={e => {
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
						inputRef={nameInput}
						placeholder="Name"
						fullWidth
					/>
					<TextField
						inputRef={usernameInput}
						placeholder="Username"
						fullWidth
					/>
					<TextField
						inputRef={bioInput}
						placeholder="Bio"
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
						Register
					</Button>
				</Box>
			</form>
		</Box>
	);
}
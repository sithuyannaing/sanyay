const api = import.meta.env.VITE_API;

export const postUser = async (data:any) => {
  const res = await fetch(`${api}/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error("Error: Check Network Log");
};

export const postLogin = async (username:string, password:string) => {
  const res = await fetch(`${api}/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error("Incorrect username or password");
};

const getToken = () => {
  return localStorage.getItem("token");
}

export const fetchVerify = async () => {
  const token = getToken();
	const res = await fetch(`${api}/verify`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (res.ok) {
		return res.json();
	}

	return false;
}

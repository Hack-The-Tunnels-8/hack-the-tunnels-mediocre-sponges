import { Admin } from "../../pages";

export const login = async (email: string, password: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/login`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const json = await response.json();
  return json;
};
export const signUp = async (email: string, password: string) => {
  console.log("dsfsd")
  try{
    const response = await fetch( 
    `${import.meta.env.VITE_API_ROOT}/api/v1/signUp`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        role: Admin
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  console.log("After fet")
  const json = await response.json();
  if(response.status != 201) return "Account exists"
  // return json;
  }
  catch(err) {
    return err;
  }
};

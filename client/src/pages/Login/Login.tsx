import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";
import { TRUE } from "sass";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  const attemptLogin = async (email, password) => {
    try {
      const message = await login(email, password);
      console.log(message);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="email" id="email" autoFocus></input><br></br>
          <input type="text" placeholder="password" id="password"></input>
        </div>
        <button onClick={() => attemptLogin((document.getElementById('email')as HTMLInputElement).value, (document.getElementById('password')as HTMLInputElement).value)}>
          Login
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;

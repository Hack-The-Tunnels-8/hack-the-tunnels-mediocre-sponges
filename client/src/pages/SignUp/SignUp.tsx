import { Page } from "../../components";
import { signUp } from "../../infrastructure/ServiceAPI";
import { useState} from "react";
import "./SignUp.style.scss";

function SignUp() {
  const [message, setMessage] = useState(null);
  const attemptSignUp = async (email, password) => {
    try {
      const message = await signUp(email, password);
      console.log(message)
      setMessage(message);
    } catch (error) {
      console.log(error);
      
      
    }
  };

  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder="email" id="email" autoFocus></input><br></br>
          <input type="text" placeholder="password" id="password"></input>
        </div>
        <button onClick={() => attemptSignUp((document.getElementById('email')as HTMLInputElement).value, (document.getElementById('password')as HTMLInputElement).value)}>
          Sign Up
        </button>
          {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default SignUp;

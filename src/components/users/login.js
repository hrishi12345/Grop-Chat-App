import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(props) {
  const navigate = useNavigate()

  const loginHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const loginDetails = {
      email,
      password
    };

    try {
      const response = await axios.post("http://localhost:3001/user/loginuser", loginDetails);

      if (response.status === 201) {
        alert("User Login successfully");
        navigate("/homepage"); // Programmatically navigate to "/homepage"
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <label htmlFor="email">Email:</label>
      <input id="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;

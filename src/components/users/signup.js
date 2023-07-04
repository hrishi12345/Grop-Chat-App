import axios from "axios";

function SignUp() {
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const number = event.target.number.value;
    const signup = {
      email,
      username,
      password,
      number,
    };
    const response = await axios.post("http://localhost:3000/user/adduser", signup);
    if (response.status === 200) {
      console.alert("User Created SuccessFully");
    } else {
      console.log("Failed");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username:</label>
      <input id="username"></input>
      <label htmlFor="email">Email:</label>
      <input id="email"></input>
      <label htmlFor="number">Phone Number:</label>
      <input id="number"></input>
      <label htmlFor="password">Password</label>
      <input id="password"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;

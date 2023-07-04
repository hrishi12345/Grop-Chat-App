import axios from "axios"

function Login(props){
    const loginHandler=async (event)=>{
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value
        const loginDetails={
            email,password
        }
        const response=await axios.post('http://localhost:3001/user/loginuser',loginDetails)
        console.log(response.status)
    }
    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="email">Email:</label>
            <input id="email"/>
            <label htmlFor="password">Password:</label>
            <input id="password" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Login
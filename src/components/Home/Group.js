import axios from "axios"

function Group(){
    async function groupHandler(event){
        event.preventDefault()
        const name=event.target.name.value
        const description=event.target.description.value
        const groupDetails={name,description}
        const token=localStorage.getItem('token')
        console.log(groupDetails)
        const response= await axios.post('http://localhost:3001/group/creategroup',{groupDetails:groupDetails}, { headers: { "Authorization": token } })
        console.log(response)
    }
    return(
        <form onSubmit={groupHandler}>
            <h2>Create Group</h2>
            <label htmlFor="name">Group Name</label>
            <input id="name"></input>
            <label htmlFor="description">Description</label>
            <input id="description"></input>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Group
import { useState } from "react"

function SignUpForm({setToken,token}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const api = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username:username,
                password:password,
            })
        })
        const response = await api.json()
        console.log(response);
        setToken(response.token);
        setPassword("")
        setUsername("")
    } catch (error) {
        setError(error.message)
    }
  }


  return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
  <label>
    Username: {""}<br/><input 
    value={username} 
    onChange={(e)=> setUsername(e.target.value)}/>
  </label><br/>
  <label>
    Password: {""}<br/><input 
    type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)} />
  </label><br/>
  <button style={{color: 'red'}}>Submit</button>
</form>
    </>
  )
}

export default SignUpForm
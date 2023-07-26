import { useState } from "react";



export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState({})
  
    async function handleClick() {
      try {
        const api = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`,
            }
        })
        const result = await api.json()
        console.log(result)
        setSuccessMessage(result.message)
        setData(result.data)
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {data && <p>Welcome {data.username}</p>}<br/>
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }
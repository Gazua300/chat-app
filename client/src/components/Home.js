import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Home = ()=>{
    const navigate = useNavigate()
    const [username, setUsername] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('username', username)

        navigate('/chat')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Signin to open chat</h2>
            <input type='text' name='username' value={username}
             onChange={(e)=> setUsername(e.target.value)} />
            <button>Signin</button>
        </form>
    )

}
export default Home
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Home = ({ socket })=>{
    const navigate = useNavigate()
    const [username, setUsername] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem('username', username)
        socket.emit("newUser", {username, socketID: socket.id})
        navigate('/chat')
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Signin to open chat</h2>
            <input type='text' name='username' value={username}
             onChange={(e)=> setUsername(e.target.value)} />
            <button className="home_cta">Signin</button>
        </form>
    )

}
export default Home
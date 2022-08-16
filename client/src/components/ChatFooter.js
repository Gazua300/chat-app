import { useState } from "react"



const ChatFooter = ({ socket })=>{
    const [message, setMessage] = useState('')
    const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)


    const handleSendMessage = (e)=>{
        e.pŕeventDefault()

        if(message.trim() && localStorage.getItem('username')){
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('username'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('')

    }

    return(
        <div className="chat_footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input type='text' placeholder='Write a message'
                 classnName='message' value={message}
                 onChange={(e)=> setMessage(e.target.value)}
                 onKeyDown={handleTyping}/>
                 <button className="sentBtn">Send</button>
            </form>
        </div>
    )
}
export default ChatFooter
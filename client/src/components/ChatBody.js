import { useNavigate } from "react-router-dom"



const ChatBody = ({ messages, typingStatus, lastMessageRef })=>{
    const navigate =  useNavigate()

    const handleLeaveChat = ()=>{
        localStorage.removeItem('username')

        navigate('/')
        window.location.reload()
    }


    return(
        <>
            <header  className="chat_mainHeader">
                <p>Hangout with collegues</p>
                <button className="leaveChat_btn"
                 onClick={handleLeaveChat}>Leave Chat</button>
            </header>

            <div className="message_container">
                {messages.map((msg)=>
                    msg.name === localStorage.getItem('username') ? (
                        <div className="message_chats">
                            <p className="sender_name">You</p>
                            <div className="message_sender">
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ) : (
                            <div className="message_chats">
                                <p>Other</p>
                                <div className="message_recipient">
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        )
                    )}                

                <div className="message_status">
                    <p>{typingStatus}</p>
                </div>
                <div ref={lastMessageRef}/>
            </div>
        </>
    )
}
export default ChatBody
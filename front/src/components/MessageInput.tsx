import { useSendMessage } from "../hooks/use-send-message"


export const MessageInput = () => {
    const {input, setInput, send} = useSendMessage();


    return (
        <div>
            <input 
            onChange={(e) => setInput(e.target.value)}
            value={input}
            />
            <button onClick={send}>送信</button>
        </div>
    )

}

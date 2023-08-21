import { useMessageList } from "../hooks/use-message-list"



export const MessageList = () => {
    const MessageList = useMessageList();


    return (
        <div>
            {MessageList.map((m, i) => (
                <div key={i}>{m.content}</div>
            ))}
        </div>
    )
}
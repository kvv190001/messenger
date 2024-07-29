type Props = {
    type: "ChatFooter" | "ChatDialog" | "StartLogin"
    action: "ChatSend" | "ChatEmbed" | "ChatUpload" | "GlobalNavigate"
    closeDialog?: boolean
    text?: string
}

export default function ButtonAction({type, text} : Props) {
    return (
        <button className={`ButtonAction ${type}`} value={text ?? "Send"}/>
    )
}
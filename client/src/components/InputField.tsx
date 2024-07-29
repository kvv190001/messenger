type Props = {
    type: "ChatFooter" | "ChatDialog" | "StartLogin"
    text?: string
}

export default function InputField({type, text} : Props) {
    return (
        <input className={`InputField ${type}`} placeholder={text ?? ``}/>
    )
}
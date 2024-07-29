/*
this button is for navigating between frames, not hrefs
use ButtonAction for that
*/

type Props = {
    children: React.ReactNode;
    page: "Chat" | "Start"  //pass this to resp-
    target: string          //ective controller
}

export default function ButtonNav({children}: Props) {
    return (
        <div className="ButtonNav">{children}</div>
    )
}
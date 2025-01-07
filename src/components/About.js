import Header from "./Header"
import { DisplayContext } from "../helpers/DisplayContext"
import { useContext } from "react"

export default function About() {
    const { darkMode } = useContext(DisplayContext)
    return (
        <>
            <div className={ darkMode ? "about-body dark-body-left" : "about-body"  }>
                <Header />
                <div className={ darkMode ? "about-hero dark-body-left" : "about-hero" }>
                    <iframe src="/jimmy rubia CV.pdf" width = "800"  height="90%" style={{border: "none"}} />
                    <a className="ext-btn" href="/jimmy rubia CV.pdf" download={true} >Download CV</a>
                </div>
            </div>
        </>
    )
}
import { Link } from "react-router-dom"
import { DisplayContext } from "../helpers/DisplayContext"
import { useContext } from "react"

export default function Header() {
    const { darkMode } = useContext(DisplayContext)
    return (
        <>
            <header className={ darkMode ? "home-header dark-body-left" : "home-header" }>
                <Link to="/" className="icon about-link" >Home</Link>
            </header>
        </>
    )
}
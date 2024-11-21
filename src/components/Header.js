import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header className="home-header ">
                <Link to="/" className="icon about-link" >Home</Link>
            </header>
        </>
    )
}
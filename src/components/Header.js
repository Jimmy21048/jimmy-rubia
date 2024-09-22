import { Link } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header className="home-header">
                <Link to="/" className="icon" >J</Link>
                <input type='checkbox' id='check' />
                <label htmlFor='check' id='btn1'><i class="fa-solid fa-bars"></i></label>
                <div className='tabs'>
                    <label htmlFor='check' id='btn2'><i class="fa-solid fa-xmark"></i></label>
                    <Link to='/' >Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/about'>About</Link>
                </div>
            </header>
        </>
    )
}
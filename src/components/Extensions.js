import { Link } from "react-router-dom"
import { tutorials } from "./tutorialArray"
export default function Extensions() {
    return (
        <div className='my-ext'>
        <div className='my-ext-title'>
            <img src='./images/chrome-logo.jpg' />
            <h1 >My Extensions</h1>
        </div>
        <div className='my-ext-body'>
            <button><i class="fa-solid fa-angle-left"></i></button>
            <div className='ext-item'>
                <h4>To-go todo</h4>
                <p>
                    An extension for saving your todo items on the go. Save your items anytime, anywhere, as you surf through the internet... 
                    whichever page you're in, this is your go-to partner
                </p>
                <Link className='ext-btn ext-btn-bg' to={`/tutorial/${0}`}>Check It Out</Link>
                <a className="ext-btn ext-btn-sm" download={true} href={tutorials[0].file} >Download Now</a>
            </div>
            <button><i className="fa-solid fa-angle-right"></i></button>
        </div>
        
    </div>
    )
}
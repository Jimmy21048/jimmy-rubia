import { Link } from "react-router-dom"
import { tutorials } from "./tutorialArray"
import { useState } from "react"

export default function Extensions() {
    const extCount = 2
    const[extensions, setExtensions] = useState(1)

    const handlePrevExt = () => {
        if(extensions === 1) {
            setExtensions(extCount)
        } else if(extensions === extCount) {
            setExtensions(1)
        } else {
            setExtensions(prev => prev - 1)
        }
    }

    const handleNextExt = () => {
        if(extensions === 1) {
            setExtensions(extCount)
        } else if(extensions === extCount) {
            setExtensions(1)
        } else {
            setExtensions(prev => prev + 1)
        }
    }
    return (
        <div className='my-ext'>
        <div className='my-ext-title'>
            <img src='./images/chrome-logo.jpg' alt="chrome logo" />
            <h1 >My Extensions</h1>
        </div>
        <div className='my-ext-body'>
            <button onClick={handlePrevExt} ><i class="fa-solid fa-angle-left"></i></button>

                <div className='ext-item' style={ extensions === 1 ? {display: 'flex'} : {display: 'none'} }>
                    <h4>To-go todo</h4>
                    <p>
                        An extension for saving your todo items on the go. Save your items anytime, anywhere, as you surf through the internet... 
                        whichever page you're in, this is your go-to partner
                    </p>
                    <Link className='ext-btn ext-btn-bg' to={`/tutorial/${0}`}>Check It Out</Link>
                    <a className="ext-btn ext-btn-sm" download={true} href={tutorials[0].file} >Download Now</a>
                </div>
                <div className='ext-item' style={ extensions === 2 ? {display: 'flex'} : {display: 'none'} }>
                    <h4>Word Plus</h4>
                    <p>
                        Word plus is an on-page dictionary that gives the meaning of words/phrases
                    </p>
                    <Link className='ext-btn ext-btn-bg' to={`/tutorial/${1}`}>Check It Out</Link>
                    <a className="ext-btn ext-btn-sm" download={true} href={tutorials[1].file} >Download Now</a>
                </div>

            <button onClick={handleNextExt} ><i className="fa-solid fa-angle-right"></i></button>
        </div>
        
    </div>
    )
}
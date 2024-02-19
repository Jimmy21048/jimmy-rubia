
import { Link } from 'react-router-dom';
import Header from './Header';
import './index.css';
export default function Home() {
    return (
        <div className="home-body">
            <Header />
            <div className='home-hero'>
                <div className='home-hero-left'>
                    <p>GREETINGS &#128075;, I am</p>
                    <h1>JIMMY RUBIA</h1>
                    <p>Developer and Designer</p>
                    <div className='langs'>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3"></i>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-react"></i>
                        <i class="fa-brands fa-node-js"></i>
                        <i class="fa-brands fa-php"></i>
                    </div>
                    <Link className='explore' to='/projects'>Explore <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className='home-hero-right'></div>
            </div>
        </div>
    )
}
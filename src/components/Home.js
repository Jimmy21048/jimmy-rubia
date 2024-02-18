import { Link } from 'react-router-dom';
import './index.css';
export default function Home() {
    return (
        <div className="home-body">
            <header className="home-header">
                <div className="icon">J</div>
                <input type='checkbox' id='check' />
                <label htmlFor='check' id='btn1'><i class="fa-solid fa-bars"></i></label>
                <div className='tabs'>
                    <label htmlFor='check' id='btn2'><i class="fa-solid fa-xmark"></i></label>
                    <Link to=''>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to=''>Experience</Link>
                    <Link to=''>Contacts</Link>
                </div>
            </header>
        </div>
    )
}
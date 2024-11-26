import About from './About';
import Home from './Home';
import './index.css';
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className='main-body'>
            <Routes> 
                <Route path="/" element = {<Home />}/>
                <Route path="about" element = {<About />} />
            </Routes>
        </div>

    )
}
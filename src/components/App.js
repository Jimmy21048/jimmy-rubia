import About from './About';
import Home from './Home';
import './index.css';
import Tutorial from './Tutorial';
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className='main-body'>
            <Routes> 
                <Route path="/" element = {<Home />}/>
                <Route path="/about" element = {<About />} />
                <Route path= "/tutorial/:id" element = {<Tutorial />} />
            </Routes>
        </div>

    )
}
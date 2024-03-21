import Header from './Header';
import Projects from './projects';
import About from './About';
import Home from './Home';
import './index.css';
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className='main-body'>
        {/* <Header /> */}
        {/* <Home /> */}
            <Routes> 
                <Route path="/" element = {<Home />}/>
                <Route path="projects" element = {<Projects />} />
                <Route path="about" element = {<About />} />
            </Routes>
        </div>

    )
}
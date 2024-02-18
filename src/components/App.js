import Header from './Header';
import Projects from './projects';
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
            </Routes>
        </div>

    )
}
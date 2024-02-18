import Header from './Header';
import Home from './Home';
import './index.css';
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div className='main-body'>
        <Header />
        <Home />
            {/* <Routes> 
                <Route path="/" element = {<Home />}/>
            </Routes> */}
        </div>

    )
}
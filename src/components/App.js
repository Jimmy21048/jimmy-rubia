import About from './About';
import Home from './Home';
import './index.css';
import Tutorial from './Tutorial';
import { Route, Routes } from "react-router-dom";
import { DisplayContext } from '../helpers/DisplayContext';
import { useState } from 'react';

export default function App() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
        <DisplayContext.Provider value = {{ darkMode, setDarkMode }}>
            <Routes> 
                <Route path="/" element = {<Home />}/>
                <Route path="/about" element = {<About />} />
                <Route path= "/tutorial/:id" element = {<Tutorial />} />
            </Routes>
        </DisplayContext.Provider>
        </>

    )
}
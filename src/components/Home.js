import { Link } from 'react-router-dom';
import Extensions from './Extensions';
import { useContext, useState } from 'react';
import './index.css';
import { DisplayContext } from '../helpers/DisplayContext';

export default function Home() {
    const { darkMode, setDarkMode } = useContext(DisplayContext)
    return (
        <div className={ !darkMode ? "home-body" : 'home-body dark-body-left'}>
            {
                darkMode ? 
                <i style={{ color : '#f4f5f6'}} class="fa-solid fa-sun hidden-items-1" onClick={() => setDarkMode(false)} ></i> 
                : 
                <i class="fa-solid fa-moon hidden-items-1" onClick={() => setDarkMode(true)} ></i>
            }
            <input type='checkbox' hidden id='menu' className='hidden-items-1' />
            <label htmlFor='menu' className='hidden-items-1 hidden-label'><i style={{color : darkMode && '#f5f6f7'}} className='fa-solid fa-bars'></i></label>
            <div className='body-menu hidden-items-1'>
                <nav style={{height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '20px'}} >
                    <label htmlFor='menu' >X</label>
                </nav>
                <h5>Chrome Extensions</h5>
                <Extensions />
            </div>
                <div className={ !darkMode ? 'body-left' : 'body-left dark-body-left' }>
                    <div className='body-left-top'>
                        
                        
                        <img className='profile-image' src='./images/jimmy1.avif' alt='jimmy rubia' />
                    </div>
                    <div className='body-left-bottom'>
                        <h1 style={{color : darkMode && '#f5f6f7'}}>JIMMY RUBIA</h1>
                        <p style={{color : darkMode && '#f5f6f7'}}>Software Engineer</p>
                        <div className='langs'>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-html5"></i>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-css3"></i>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-js"></i>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-react"></i>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-node-js"></i>
                            <i style={{color : darkMode && '#f5f6f7'}} class="fa-brands fa-php"></i>
                        </div>
                        <Link className='about-link' to={'/about'} style={{color : darkMode && '#f5f6f7'}}>About me</Link>
                        <a className="ext-btn hidden-cv" href="/jimmy rubia CV.pdf" download={true} >Download CV</a>
                    </div>
                    <div className='body-animate-title1'>
                        <h1 style={{color : darkMode && '#f5f6f7'}}>Technologies</h1>
                        <div className='animate-techs'>
                            <i  class="fa-brands fa-html5">  HTML</i>
                            <i  class="fa-brands fa-css3">  CSS</i>
                            <i  class="fa-brands fa-js">  JAVASCRIPT</i>
                            <i class="fa-brands fa-react">  REACT</i>
                            <i  class="fa-brands fa-node-js">  NODE JS</i>
                            <i  class="fa-brands fa-php">  PHP</i>
                            <i  class="fa-brands fa-python">  Python</i>
                        </div>

                        <div className='socials-animate' >

                        </div>
                    </div>

                    <div className='hide-extension'>
                        <Extensions />
                    </div>
                </div>

                <div className={ darkMode ? 'body-right dark-body-left' : 'body-right'} id='projects-panel'>
                    <div className='body-right-top'>

                    </div>
                    <div className='body-right-bottom'>
                        <h3>Projects</h3>

                        <div className='projects hero1'>
                            <h2  style={{color : darkMode && '#f5f6f7'}}>Resort</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/resort.jpg' alt='resort' />

                                    <div  style={{color : darkMode && '#f5f6f7'}} className='projects-content'>
                                    The site mimmicks hotel operations, with services ranging from delicacies,
                                    room bookings to outdoor engagements. With a serene setting,
                                    users can indulge in exquisite delicacies
                                    and enjoy outdoor games.
                                    </div>
                                </div>
                                <div className='links'>
                                        <a target='_blank' rel='noreferrer' href="https://uradi-encore-hotel.vercel.app" className='view-project'>Visit site</a>
                                        <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/hotel-site" className='view-code'>View Code</a>
                                </div>

                            </div>  
                        </div>
                        <hr />

                        <div className='projects hero1'>
                            <h2  style={{color : darkMode && '#f5f6f7'}}>Events site</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/events.png' alt='events' />
                                    <div  style={{color : darkMode && '#f5f6f7'}} className='projects-content'>
                                        "Celebrate Every Special Moment! Whether
                                        it's a birthday, Mother's Day, Father's Day,
                                        or any day worth remembering, we've got the
                                        perfect wishes to make your loved ones feel
                                        cherished. Spread joy and make their day
                                        unforgettable!"

                                    </div>
                                </div>
                                <div className='links'>
                                        <a target='_blank' rel='noreferrer' href="https://my-events-site.vercel.app" className='view-project'>Visit site</a>
                                        <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/events-site" className='view-code'>View Code</a>
                                </div>
                            </div>  
                        </div>
                        <hr />

                        <div className='projects hero1'>
                            <h2  style={{color : darkMode && '#f5f6f7'}}>Redoc</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/redoc.jpg' alt='redoc' />
                                    <div  style={{color : darkMode && '#f5f6f7'}} className='projects-content'>
                                    Redoc is an engagement site that allows users to publish their ideas and opinions.
                                    It provides a platform for creating and sharing content easily.
                                    It is also equipped with a collaborative feature where users can 
                                    engage with each other through peer reviews
                                    </div>
                                </div>
                                <div className='links'>
                                        <a target='_blank' rel='noreferrer' href="https://redoc-collab.vercel.app" className='view-project'>Visit site</a>
                                        <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/redoc" className='view-code'>View Code</a>
                                </div>
                            </div>  
                        </div>
                        <hr />

                        <div className='projects hero1'>
                            <h2  style={{color : darkMode && '#f5f6f7'}}>M-wears</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/wears.jpg' alt='wears store' />
                                    <div  style={{color : darkMode && '#f5f6f7'}} className='projects-content'>
                                    "M-Wears is a mini e-commerce static website designed for
                                    marketing and showcasing a curated selection of trendy 
                                    and high-quality apparel. This platform serves as an online catalog, 
                                    allowing visitors to explore a variety of clothing options 
                                    categorized for ease of navigation."
                                    </div>
                                </div>
                                <div className='links'>
                                        <a target='_blank' rel='noreferrer' href="https://john-msaani-collections.vercel.app" className='view-project'>Visit site</a>
                                        <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/wears-store" className='view-code'>View Code</a>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
        </div>
    )
}
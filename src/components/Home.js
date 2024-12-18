import Tutorial from './Tutorial';
import { Link } from 'react-router-dom';
import './index.css';
export default function Home() {
    return (
        <div className="home-body">
                <div className='body-left'>
                    <div className='body-left-top'>
                        <img className='profile-image' src='./images/jimmy1.avif' alt='jimmy rubia' />
                    </div>
                    <div className='body-left-bottom'>
                        <h1>JIMMY RUBIA</h1>
                        <p>Software Engineer</p>
                        <div className='langs'>
                            <i class="fa-brands fa-html5"></i>
                            <i class="fa-brands fa-css3"></i>
                            <i class="fa-brands fa-js"></i>
                            <i class="fa-brands fa-react"></i>
                            <i class="fa-brands fa-node-js"></i>
                            <i class="fa-brands fa-php"></i>
                        </div>
                        <Link className='about-link' to={'/about'}>About me</Link>
                    </div>
                    <div className='body-animate-title1'>
                        <h1 data-aos="slide-right" data-aos-delay="90" data-aos-duration="1000">Technologies</h1>
                        <div className='animate-techs'>
                            <i data-aos='zoom-in' data-aos-delay="100" data-aos-duration="800" class="fa-brands fa-html5">  HTML</i>
                            <i data-aos='zoom-in' data-aos-delay="200" data-aos-duration="900" class="fa-brands fa-css3">  CSS</i>
                            <i data-aos='zoom-in' data-aos-delay="300" data-aos-duration="1000" class="fa-brands fa-js">  JAVASCRIPT</i>
                            <i data-aos='zoom-in' data-aos-delay="400" data-aos-duration="1100" class="fa-brands fa-react">  REACT</i>
                            <i data-aos='zoom-in' data-aos-delay="500" data-aos-duration="1200" class="fa-brands fa-node-js">  NODE JS</i>
                            <i data-aos='zoom-in' data-aos-delay="600" data-aos-duration="1300" class="fa-brands fa-php">  PHP</i>
                        </div>

                        <div className='socials-animate' >

                        </div>
                    </div>

                    <div className='my-ext'>
                        <div className='my-ext-title'>
                            <img src='./images/chrome-logo.jpg' />
                            <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" >My Extensions</h1>
                        </div>
                        <div className='my-ext-body'>
                            <button><i class="fa-solid fa-angle-left"></i></button>
                            <div className='ext-item'>
                                <h4>To-go todo</h4>
                                <p>
                                    An extension for saving your todo items on the go. Save your items anytime, anywhere, as you surf through the internet... 
                                    whichever page you're in, this is your go-to partner
                                </p>
                                <Link className='ext-btn' to={`/tutorial/${0}`}>Check It Out</Link>
                            </div>
                            <button><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                        
                    </div>
                </div>

                <div className='body-right'>
                    <div className='body-right-top'>
                        <i class="fa-solid fa-moon"></i>
                    </div>
                    <div className='body-right-bottom'>
                        <h3>Projects</h3>

                        <div className='projects hero1'>
                            <h2>Resort</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/resort.jpg' alt='resort' />

                                    <div className='projects-content'>
                                    Indulge in exquisite delicacies and enjoy outdoor games.
                                    Perfect for relaxation and adventure, our resort promises
                                    an unforgettable stay with exceptional hospitality in a serene setting.

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
                            <h2>Events site</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/events.png' alt='events' />
                                    <div className='projects-content'>
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
                            <h2>Redoc</h2>
                            <div className='projects-hero'>
                                <div class='projects-link'>
                                    <img src='./images/redoc.jpg' alt='redoc' />
                                    <div className='projects-content'>
                                    "Unleash Your Creativity! 🎨✍️ Collaborate, 
                                    create, and share content seamlessly with our all-in-one platform. 
                                    Empower your ideas and bring your vision to life—together with Redoc"
                                    </div>
                                </div>
                                <div className='links'>
                                        <a target='_blank' rel='noreferrer' href="https://redoc-collab.vercel.app" className='view-project'>Visit site</a>
                                        <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/redoc" className='view-code'>View Code</a>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
        </div>
    )
}
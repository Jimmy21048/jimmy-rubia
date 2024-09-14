import Header from './Header'
export default function Projects() {
    return (
        <>
            <div className='projects-body'>
                <Header />
                <div className='projects hero1'>
                    <h2>Library Management System</h2>
                    <div className='projects-hero'>
                        <div class='projects-link' href=''>
                            <img src='./images/lib3.jpg' alt='Book master' />
                        </div>
                        <div className='projects-hero-content'>
                        "Welcome to BookMaster: Your Gateway to Library Management Excellence!
                        Unlock the power of seamless book lending, member registration, and comprehensive
                        book tracking with our cutting-edge library management website.
                            <a target='_blank' rel='noreferrer' href="https://online-library-o2us.onrender.com" className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/online-library" className='view-code'>View Code</a>
                        </div>
                    </div>    
                </div>
                <div className='projects hero1'>
                    <h2>Church Website</h2>
                    <div className='projects-hero'>
                        <div class='projects-link' >
                            <img src='./images/church2.jpg' alt='Book master' />
                        </div>
                        <div className='projects-hero-content'>  
                            A church is a special place where hearts are lifted in worship,
                            minds are nourished with timeless teachings, and souls find sanctuary
                            in God's love. Find a place, a church that stands as a beacon of faith,
                            offering a warm and welcoming environment for all who seek spiritual nourishment
                            and community.
                            <a target='_blank' rel='noreferrer' href='https://kag-maili4.netlify.app/' className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/kag-maili4" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>

                <div className='projects hero1'>
                    <h2>Resort</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>
                            <img src='./images/resort.jpg' alt='resort' />
                        </div>
                        <div className='projects-hero-content'>
                        Indulge in exquisite delicacies and enjoy outdoor games.
                        Perfect for relaxation and adventure, our resort promises
                        an unforgettable stay with exceptional hospitality in a serene setting.
                            <a target='_blank' rel='noreferrer' href="https://uradi-encore-hotel.vercel.app" className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/hotel-site" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
                <hr/>
                <h3 className='mini-projects'>Mini Projects</h3>

                <div className='projects hero1'>
                    <h2>Music Player</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>
                            <img src='./images/music.jpg' alt='music' />
                        </div>
                        <div className='projects-hero-content'>
                        
                            "Immerse Yourself in Limitless Melodies: 
                            Elevate Your Experience with Our Innovative,
                             Intuitive Music Player Site, 
                             Where Every Beat Finds its Perfect Pulse!"
                            <a target='_blank' rel='noreferrer' href="https://jimmy-audio-player.netlify.app" className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/audio-player" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
                <div className='projects hero1'>
                    <h2>Weather Site</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>
                            <img src='./images/weather.jpg' alt='weather' />
                        </div>
                        <div className='projects-hero-content'>
                            
                            "Forecast Your Adventures: Explore the Elements with Our Dynamic Weather Site, Where Every Forecast Becomes Your Guide to Every Day's Journey!"
                            <a target='_blank' rel='noreferrer' href="https://jimmy-weather-website.netlify.app/" className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/weather-app" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}
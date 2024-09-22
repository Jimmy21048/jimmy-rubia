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

                <div className='projects hero1'>
                    <h2>Events site</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>
                            <img src='./images/events.png' alt='events' />
                        </div>
                        <div className='projects-hero-content'>
                            "Celebrate Every Special Moment! Whether
                            it's a birthday, Mother's Day, Father's Day,
                            or any day worth remembering, we've got the
                            perfect wishes to make your loved ones feel
                            cherished. Spread joy and make their day
                            unforgettable!"
                            <a target='_blank' rel='noreferrer' href="https://my-events-site.vercel.app" className='view-project'>Visit site</a>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Jimmy21048/events-site" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
                <hr/>
            </div>
        </>
    )
}
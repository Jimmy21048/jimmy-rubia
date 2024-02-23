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
                            <img src='./images/lib3.png' alt='Book master' />
                        </div>
                        <div className='projects-hero-content'>
                        "Welcome to BookMaster: Your Gateway to Library Management Excellence!
                        Unlock the power of seamless book lending, member registration, and comprehensive
                        book tracking with our cutting-edge library management website.
                            <a href="https://online-library-o2us.onrender.com" className='view-project'>View project</a>
                            <a href="https://github.com/Jimmy21048/online-library" className='view-code'>View Code</a>
                        </div>
                    </div>    
                </div>
                <div className='projects hero1'>
                    <h2>Church Website</h2>
                    <div className='projects-hero'>
                        <div class='projects-link' href='https://kag-maili4.netlify.app/'>
                            <img src='./images/church1.png' alt='Book master' />
                        </div>
                        <div className='projects-hero-content'>  
                            A church is a special place where hearts are lifted in worship,
                            minds are nourished with timeless teachings, and souls find sanctuary
                            in God's love. Find a place, a church that stands as a beacon of faith,
                            offering a warm and welcoming environment for all who seek spiritual nourishment
                            and community.
                            <a href="https://online-library-o2us.onrender.com" className='view-project'>View project</a>
                            <a href="" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
                <div className='projects hero1'>
                    <h2>Title</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>project1</div>
                        <div className='projects-hero-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididun laborum.
                            <a href="https://online-library-o2us.onrender.com" className='view-project'>View project</a>
                            <a href="" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
                <div className='projects hero1'>
                    <h2>Title</h2>
                    <div className='projects-hero'>
                        <div class='projects-link'>project1</div>
                        <div className='projects-hero-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor inborum.
                            <a href="https://online-library-o2us.onrender.com" className='view-project'>View project</a>
                            <a href="" className='view-code'>View Code</a>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}
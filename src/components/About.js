import Header from "./Header"
export default function About() {
    return (
        <>
            <div className="about-body">
                <Header />
                <div className="about-hero">
                    <iframe src="/jimmy rubia CV.pdf" width = "800"  height="90%" style={{border: "none"}} />
                    <a className="ext-btn" href="/jimmy rubia CV.pdf" download={true} >Download CV</a>
                </div>
            </div>
        </>
    )
}
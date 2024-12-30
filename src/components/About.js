import Header from "./Header"
export default function About() {
    return (
        <>
            <div className="about-body">
                <Header />
                <div className="about-hero">
                    <h2>ABOUT</h2>
                    <a className="ext-btn" href="/jimmy rubia CV.pdf" download={true} >Download CV</a>
                    <iframe src="/jimmy rubia CV.pdf" width = "800" />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                     Arcu non sodales neque sodales ut etiam sit amet nisl. Cras sed felis
                      eget velit aliquet sagittis id consectetur purus. Donec pretium vulputate
                    sapien nec sagittis. In nulla posuere sollicitudin aliquam ultrices sagittis orci.
                    Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Imperdiet
                    proin fermentum leo vel orci porta. Nisl pretium fusce id velit ut tortor pretium. 
                    Justo donec enim diam vulputate ut pharetra sit amet.

                    Sapien pellentesque habitant morbi tristique senectus.
                     Elementum eu facilisis sed odio morbi quis.
                    </p>
                </div>
            </div>
        </>
    )
}
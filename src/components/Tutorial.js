import { useParams } from "react-router-dom";
import Header from "./Header"
import { tutorials } from './tutorialArray';
// import { Link } from "react-router-dom";

export default function Tutorial() {
    const { id } = useParams()
    const item = tutorials[id]

    return (
        <div className="tutorial about-body">
            <Header />
            <div className="tutorial-body">
            <div className="t-b-right">
                    <a className = "ext-btn" style={{minHeight: '6vh'}} href={item.file} download={true}>Download Now</a>
                    <h3>Installation</h3>
                    <p>Click on the download link above to get the .zip file </p>
                    <p>Extract the folder from the .zip file</p>
                    <p>Head to chrome, right-click on the top-right menu</p>
                    <img src="/images/chrome-menu.png" alt="chrome-menu" />
                    <p>Go to Extensions, then to manage extensions</p>
                    <img src="/images/manage-ext.png" alt="manage-extensions" />
                    <p>Toggle developer mode to turn it on</p>
                    <img src="/images/developer-mode.png" alt="developer-mode"  />
                    <p>On the top-left side, of the extensions tab, click 'load unpacked'</p>
                    <img src="/images/load-unpacked.png" alt="load-unpacked" />
                    <p>Select the folder you extracted earlier</p>
                    <p>You are good to go</p>
                </div>
                <div className="t-b-left">
                    <h3>{item.title}</h3>
                    {
                        item.div.map((x) => {
                            if(x.title1) {
                                return <h4>{x.title1}</h4>
                            }
                            if(x.image) {
                                return <img style={{ objectFit: 'contain', width: 'min-content', height: 'min-content', maxHeight: '200px', maxWidth: '300px'}} className="s-image" src={x.image} alt="screenshot" />
                            }
                            if(x.content) {
                                return <p>{x.content}</p>
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </div>
    )
}
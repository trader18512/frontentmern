import "./sidebar.css"
import dp from "./dp.jpg"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <img src={dp} alt="photo" className="imglogoSide"/>
            <h2 className="sidebarTitle"> About Me</h2>
            <p>A Software Developer.</p>
            <p>Kotlin, Python, C++</p>
            <p>Android, Web Development</p>
            <h2 className="sidebarsub">Link with me</h2>
            <a href="https://github.com/trader18512" target="_blank" rel="noopener noreferrer" className="fa-brands fa-github sideSocial"><span></span></a>
            <a href="https://twitter.com/Mbitz_gustine" target="_blank" rel="noopener noreferrer" className="fa-brands fa-twitter sideSocial"><span></span></a>
            <a href="https://discord.com/channels/997207634056847451/997207634056847455" target="_blank" rel="noopener noreferrer" className="fa-brands fa-discord sideSocial"><span></span></a>
            <a href="https://www.linkedin.com/in/augustine-mwangi-2658a4198" target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin sideSocial"><span></span></a>
            <br />
            <p>Send me an email</p><br />
            <a href="Mailto:augustinemwangi54@gmail.com" className="mButton">Mail Me</a>
        </div>
    </div>
  )
}

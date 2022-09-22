import Navbar from "../../components/navbar/Navbar"
import "./home.css"
import video from "./mainscreen.mp4"
import dp from "./dp.jpg"

export default function Home() {
  return (
    <div className="Home">
        <div className="video-container">
        <video autoPlay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
        <Navbar/>
        <div className="caption">
            <img src={dp} alt="DP" className="imglogo"/>
            <h1>MWANGI AUGUSTINE MBITIRU</h1>
            <h3>Coder, Software Developer, Hobbyist Mechanic</h3>
            <a href="https://github.com/trader18512" target="_blank" rel="noopener noreferrer" className="fa-brands fa-github social"><span></span></a>
            <a href="https://twitter.com/Mbitz_gustine" target="_blank" rel="noopener noreferrer" className="fa-brands fa-twitter social"><span></span></a>
            <a href="https://discord.com/channels/997207634056847451/997207634056847455" target="_blank" rel="noopener noreferrer" className="fa-brands fa-discord social"><span></span></a>
            <a href="https://www.linkedin.com/in/augustine-mwangi-2658a4198" target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin social"><span></span></a>
        </div>
    </div>
    </div>
  )
}
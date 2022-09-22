import Navbar from "../../components/navbar/Navbar"
import "./about.css"
import dp from "./dp.jpg"


export default function About() {
  return (
    <div className="about">
        <Navbar/>
        <h1 id="centre">ABOUT AUGUSTINE</h1>
        <img src={dp} alt="DP" className="dpAbout"/>
        <p className="sAbout">
            I have always been intrested in technology and its never ending evolution. I can say it is haven to a wondering mind.
            I studied <em>Bachelor of science Business Innovation Technology management</em> in Jomo Kenyatta University of
            Agriculture and Technology in Kenya and over time went over software development resources over the internet.
            Interest in software development rose, I started going over the concepts and technologies involved in the field.
            What can I say it feels magical to experience the development of technologies.
        </p>
        <p className="sAbout">
            I have workable knowledge in <em>Kotlin for android development and Python as a language.</em>
            I am familiar with <em>Django for web development, C++ as a language, Reactjs for Web development.</em>
            <br />
            Oh! and I also repair cars for fun😀😀.
        </p>
        <p className="sAbout">
            Link with me on any of these platforms, I will be fascincated to hear about you.
            Also hit me up if you have a gig that requires my skills✌
        </p>
        <hr />
        <div className="contacts">
            <a href="https://github.com/trader18512" target="_blank" rel="noopener noreferrer" className="fa-brands fa-github social"><span></span></a>
            <a href="https://twitter.com/Mbitz_gustine" target="_blank" rel="noopener noreferrer" className="fa-brands fa-twitter social"><span></span></a>
            <a href="https://discord.com/channels/997207634056847451/997207634056847455" target="_blank" rel="noopener noreferrer" className="fa-brands fa-discord social"><span></span></a>
            <a href="https://www.linkedin.com/in/augustine-mwangi-2658a4198" target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin social"><span></span></a>
            <a href="Mailto:augustinemwangi54@gmail.com" target="_blank" rel="noopener noreferrer" className="fa-regular fa-envelope social"><span></span></a>
        </div>
    </div>
  )
}

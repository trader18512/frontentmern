import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sidebar/SideBar"
import Sproject from "../../components/sprojects/Sprojects"
import "./projects.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchProjects = async ()=>{
        const res = await axios.get("/projects")
        setProjects(res.data)
        }
        fetchProjects()
    },[])
    return (
    <div className="projos">
        <Navbar/>
        <div className="projects">
            <Sproject projects={projects}/>
            <SideBar/>
        </div>
    </div>  
)
}
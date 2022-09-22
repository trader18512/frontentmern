import "./project.css"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

export default function Project({projectsi}) {
  const IF = "http://localhost:5000/images/"
  const { user } = useContext(Context);



  const handleDelete = async () => {
    try {
      await axios.delete(`/projects/${projectsi._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/projects");
    } catch (err) {}
  };

  return (
    <div className="project">
        {projectsi.photo && (
        <img src={IF + projectsi.photo} alt="Project" className="projoPic" />)}
        <div className="projdesc">
        <p>
          {projectsi.desc}
        </p>
        {user && 
            <div className="editProjectIcons">
                <i className="fa-solid fa-trash iconf" onClick={handleDelete}></i>
            </div>}
            
        <a href={projectsi.link} className="pButton" target="_blank" rel="noopener noreferrer">Take a look</a>
        </div>
        <h3>{projectsi.title}</h3>
    </div>
    
  )
}

import Project from "../project/Project"
import "./sprojects.css"

export default function Sproject({projects}) {
  return (
    <div className="sproject">
      <ol className="sproject">
        {projects.map((x)=>(
          <li className="listloop" key={x._id}>
          <Project projectsi={x} /></li>
        ))}</ol>
    </div>
  )
}

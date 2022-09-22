import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sidebar/SideBar"
import SingleBlog from "../../components/singleblog/SingleBlog"
import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <Navbar/>
        <div className="singlepostspace">
            <SingleBlog/>
            <SideBar/>
        </div>
        
    </div>
  )
}

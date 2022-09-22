import { useEffect } from "react"
import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
import "./blog.css"
import axios from "axios"

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <div className="blog">
        <Navbar/>
        <div className="blogs">
          <Posts posts={posts}/>
          <SideBar/>
        </div>
        
        
    </div>
  )
}

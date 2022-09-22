import "./singleblog.css"
import { useLocation } from "react-router-dom"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import ReactMarkdown from 'react-markdown'

export default function SingleBlog() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const IF = "https://trial-one-web.onrender.com/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
  
    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
      getPost();
    }, [path]);
  
    const handleDelete = async () => {
        try {
          await axios.delete(`/posts/${post._id}`, {
            data: { username: user.username },
          });
          window.location.replace("/blogs");
        } catch (err) {}
      };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        setUpdateMode(false)
      } catch (err) {}
    };
  

  return (
    <div className="singleBlog">
        {post.photo && (
        <img src={IF + post.photo} alt="Bp" className="bpImage" />)}
        <div className="singletBlog">
            <h1 className="singlebTitle">
                {post.title}
            </h1>
            <p className="singlebDate">
            {new Date(post.createdAt).toDateString()}
            </p>
            {user && 
            <div className="editPostIcons">
                <i className="fa-regular fa-pen-to-square iconf" onClick={() => setUpdateMode(true)}></i>
                <i className="fa-solid fa-trash iconf" onClick={handleDelete}></i>
            </div>}
        </div>
        {updateMode ? (
          <textarea
          className="singlePostDescInput"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        ) : (
        <ReactMarkdown className="blogBody">
            {post.desc}        
        </ReactMarkdown>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
    </div>
  )
}

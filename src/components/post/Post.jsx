import "./post.css"
import{Link} from "react-router-dom"

export default function Post({post}) {
  const IF = "https://trial-one-web.onrender.com/images/";
  return (
    <div className="postFpa">
    <div className="post">
        {post.photo && (
        <img src={IF + post.photo} alt="image" className="blogPic" />)}
        
        <Link to={`/blog/${post.slug}`}className="link">
          <div className="postTitle">
          {post.title}
          </div>
          <div className="postDate">
            {new Date(post.createdAt).toDateString()}
          </div>
        </Link>
        
        
    </div>
    <hr />
    </div>
  )
}

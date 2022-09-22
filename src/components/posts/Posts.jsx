import "./posts.css"
import Post from "../post/Post"

export default function Posts({posts}) {
  return (
    <div className='posts'>
      <ol className="posts">
        {posts.map((p)=>(
          <li className="listloop" key={p._id}>
          <Post post={p} /></li>
        ))}
      </ol>
    </div>
  )
}


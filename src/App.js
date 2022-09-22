import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import SinglePost from "./pages/singlepost/SinglePost";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import WriteBlog from "./pages/writeblog/WriteBlog";
import WriteProject from "./pages/writeproject/WriteProject";
import { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/blogs" element={<Blog/>}/>
        <Route exact path="about" element={<About/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/blog/:slug" element={<SinglePost/>}/>
        <Route exact path="/login" element={user ? <Home /> : <Login />}/>
        <Route exact path="/writeblog" element={user ? <WriteBlog /> : <Blog />}/>
        <Route exact path="/writeproject" element={user ? <WriteProject /> : <Projects />}/>

      </Routes>
    </BrowserRouter>
  )
}

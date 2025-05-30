import { useContext, useState } from "react";
import "./writeproject.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function WriteProject() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      username: user.username,
      title,
      desc,
      link,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newProject.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/projects", newProject);
      window.location.replace("/projects/");
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && file.type.startsWith("image/") && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="Uploaded preview" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              if (selectedFile && ["image/jpeg", "image/png", "image/gif"].includes(selectedFile.type)) {
                setFile(selectedFile);
              } else {
                alert("Please upload a valid image file (JPEG, PNG, or GIF).");
              }
            }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          
        </div>
        <div className="writeFormGroup">
          <input
            type="link"
            placeholder="Link"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setLink(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Explain the project..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
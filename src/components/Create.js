import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BlogAdded from "./BlogAdded";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const time = 3000;

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setTimeout(() => {
        setIsPending(false);
      }, time);
    });
    setTimeout(() => {
      history.push("/");
    }, time);
  };
  return (
    <div className="create">
      {isPending && <BlogAdded />}
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>

        <input
          type="text"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;

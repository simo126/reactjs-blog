import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetsch from "./useFetsch";
import { useHistory } from "react-router-dom";
export default function BlogDetails() {
  const history = useHistory();
  const { id } = useParams();
  const [isModify, setIsModify] = useState(false);
  const [btn, setBtn] = useState("Modify");
  const [blog, isPending, error] = useFetsch(
    "http://localhost:8000/blogs/" + id
  );
  const [newBlog, setNewBlog] = useState("");

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  const handleSend = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "PATCH",
      body: JSON.stringify({
        body: newBlog,
      }),
    }).then(() => {
      setIsModify(false);
      setBtn(!btn);
      blog.body = newBlog;
    });
  };
  const handleModify = () => {
    setIsModify(!isModify);
    setBtn(!btn);
    setNewBlog(blog.body);
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {isModify && (
            <textarea
              className="texttarea"
              value={newBlog}
              onChange={(e) => {
                setNewBlog(e.target.value);
              }}
            ></textarea>
          )}
          {!isModify && <div>{blog.body}</div>}

          {btn && <button onClick={handleDelete}>Delete</button>}
          {!btn && <button onClick={handleSend}>Confirm</button>}
          <button onClick={handleModify} className="buttona">
            {btn && "Modify"}
            {!btn && "Cancel"}
          </button>
        </article>
      )}
    </div>
  );
}

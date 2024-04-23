import { useState } from "react";
const BlogAdded = () => {
  const [title, setTitle] = useState("Sending...");

  setTimeout(() => {
    setTitle("Blog Added");
  }, 1000);
  return (
    <div id="modal-container">
      <div id="modal">
        <p className="modalp">{title}</p>
      </div>
    </div>
  );
};

export default BlogAdded;

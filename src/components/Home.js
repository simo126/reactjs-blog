import React from "react";
import BlogList from "./BlogList";
import useFetsch from "./useFetsch";
export default function Home() {
  const [blogs, isPending, error] = useFetsch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

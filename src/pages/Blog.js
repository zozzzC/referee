import { useState } from "react";
import BlogItem from "../components/BlogItem";
import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

const Blog = () => {
  const [blog, deleteBlog] = useState([
    { key: 1, title: "My most recent page", description: "lorem ipsum" },
    { key: 2, title: "My second page", description: "lorem ipsum" },
    { key: 3, title: "My first page", description: "lorem ipsum" },
  ]);

  return (
    <div className="Blog">
      <Navbar />
      {blog.map((indivBlog) => (
        <BlogItem Title={indivBlog.title} Description={indivBlog.description} />
      ))}
    </div>
  );
};

export default Blog;

import React from "react";
import "./blogList.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../../App";

export default function BlogList(props) {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2 className="title">7 Places You Gotta Eat At :-</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
        
          <Link to={`/blogs/${blog.id}`}>
            <div className="flex-box">
              <div className="frontPic flex-items">
                <img src={blog.img} alt="" className="image" />
              </div>
              <div className="flex-items">
                <h1>{blog.id}.</h1>
              </div>
              <div className="flex-items">
                <h2>{blog.title}</h2>
                {/* <p>Written by {blog.author}</p> */}
              </div>
            </div>
          </Link>

        </div>
      ))}
      
    </div>
  );
}

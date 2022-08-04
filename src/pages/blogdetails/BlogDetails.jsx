import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../components/useFetch";
import "./blogDetails.css";
import Iframe from 'react-iframe'

export default function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending } = useFetch(
    "https://nandanitis.github.io/jasonapii/dbs.json" 
  );
  
  return (
    <div className="eachblog">
      <div className="blog-details">
        {isPending && <div>Loading.....</div>}

        {blog && (
          <div className="singlePost">
            <div className="singlePostWrapper">
              <img className="singlePostImg" src={blog[id-1].img} alt="" />

              <h1 className="singlePostTitle mt-5">
                {blog[id-1].title}
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
              </h1>

              <div className="singlePostInfo mb-3">
                <span className="singlePostAuthor">
                  Author:<b>{blog[id-1].author}</b>
                </span>
                <span className="singlePostDate">8 hour ago</span>
              </div>


              <p className="singlePostDesc">{blog[id-1].body}</p>

              <div className="location">
              <Iframe className="center" width="200" height="300" style="border:0;" allowfullscreen="" loading="lazy" url={blog[id-1].location}></Iframe>
              </div>
              <div>
                <h2 className="sideHead">Food you just got to try here : </h2>
              </div>
              <p className="singlePostDesc">{blog[id-1].body2}</p>
            </div>
          </div>
        )}
      </div>
      <Sidebar />
    </div>
  );
}

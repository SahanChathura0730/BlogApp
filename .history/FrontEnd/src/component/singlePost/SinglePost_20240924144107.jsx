import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5001/Images/"


  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${path}`);
        setPost(res.data); // Use res.data to get the post data
      } catch (error) {
        console.error("Error fetching the post:", error.response ? error.response.data : error.message);
      }
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={PF + post.photo}
            alt="photo not founded"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username &&
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          }
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?username=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

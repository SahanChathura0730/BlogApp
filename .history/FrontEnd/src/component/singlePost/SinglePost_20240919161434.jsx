import { Link, useLocation} from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import {useEffect, useState} from "react";

export default function SinglePost() {
  const location = useLocation ();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({});
  console.log(`api/posts/${path}`);


  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`posts/66e835c2766adbd067c2f241`);
        console.log("Response Data:", res); // Check what data you're receiving
        setPost(res);
      } catch (error) {
        console.error("Error fetching the post:", error);
      }
    };
    getPost();
  }, [path]);
  

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&
          <img
            className="singlePostImg"
            src={post.photo}
            alt=""
          />
        } 
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
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
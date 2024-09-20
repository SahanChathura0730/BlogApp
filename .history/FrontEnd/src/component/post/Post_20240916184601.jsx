import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{newDate(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}
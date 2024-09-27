import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  // Ensure `post` and its properties are defined
  if (!post) return null;

  const PF = "http://localhost:5001/Images/"

  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo}
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories && post.categories.map((c, index) => (
            <span key={index} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/singlePage/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}

import Sidebar from "../../component/sidebar/Sidebar";
import SinglePost from "../../component/singlePost/SinglePost";
import "./singlePage.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
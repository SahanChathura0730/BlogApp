import Sidebar from "../../component/sideBar/SideBar";
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
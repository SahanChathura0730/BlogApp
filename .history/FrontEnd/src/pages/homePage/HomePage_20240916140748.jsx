import React from 'react'
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"
import Posts from '../../component/posts/Posts';

export default function HomePage() {
  const [posts,setPosts]= useSatate([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts();
  });

  return (
    <>
      <Header/>
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

import React from 'react'
import Header from '../../component/Header/Header';
import Post from '../../component/post/Post';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"

export default function HomePage() {
   return (
     <>
       <Header/>
       <div className="home">
         <Post />
         <SideBar />
       </div>
     </>
   );
}

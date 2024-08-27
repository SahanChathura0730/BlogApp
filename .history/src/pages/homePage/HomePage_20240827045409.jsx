import React from 'react'
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"
import Posts from '../../component/posts/Posts';

export default function HomePage() {
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

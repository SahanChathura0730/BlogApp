import React from 'react'
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"
import Posts from '../../component/posts/Posts';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function HomePage() {
  const [posts,setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("http://localhost:5001/api/posts")
      console.log(res.data);

    }
    fetchPosts();
  },[]);

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

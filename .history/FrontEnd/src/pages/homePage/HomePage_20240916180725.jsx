import React from 'react'
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"
import Posts from '../../component/posts/Posts';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function HomePage() {
  const [posts,setPosts]= useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts"); // Adjusted path
        console.log(res.data); // This should log your posts
        setPosts(res.data); // Store posts in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  

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

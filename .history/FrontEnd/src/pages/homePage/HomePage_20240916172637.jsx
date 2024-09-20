import React from 'react'
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css"
import Posts from '../../component/posts/Posts';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function HomePage() {
  const [posts,setPosts]= useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/posts");
      console.log(res); // Check if the structure is what you expect
      console.log(res.data); // This is where your posts data will likely be
      setPosts(res.data); // Assuming `res.data` is an array of posts
      console.log("Posts set:", res.data); // Check if posts are being set correctly
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };
  

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

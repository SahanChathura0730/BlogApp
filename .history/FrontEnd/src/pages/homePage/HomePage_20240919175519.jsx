import React, { useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import SideBar from '../../component/sideBar/SideBar';
import "./homePage.css";
import Posts from '../../component/posts/Posts';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts");
        setPosts(res.data); // Set posts to res.data, which is the array
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}

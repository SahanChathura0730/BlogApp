import React from 'react'
import './posts.css'
import Post from '../post/Post'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} post={p} /> // Added `key` prop for uniqueness
      ))}
    </div>
  );
}

import React from 'react';
import './posts.css';
import Post from '../post/Post';

export default function Posts({ posts }) {
  // Ensure posts is an array
  if (!Array.isArray(posts)) {
    console.error('Expected posts to be an array but received:', posts);
    return <div>Error: Posts data is not available.</div>;
  }

  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map((p) => (
          <Post key={p._id} post={p} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

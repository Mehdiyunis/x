"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const resTwitts = await axios.get("https://x-json.vercel.app/twitts"); // get twitts from twitts table
    const resAccounts = await axios.get("https://x-json.vercel.app/accounts"); // get acconts from accounts table
    let postsLet = [];
    
    resTwitts.data.map((twit, i) => { // create posts array
      const twitter = resAccounts.data.filter(
        (person) => twit.userId === person.id
      );
      postsLet = [
        ...postsLet,
        {
          id: i,
          userName: twitter[0].username,
          postContent: twit.content,
        },
      ];
    });
    setPosts(postsLet);
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="text-white">
      <div title="posts">
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.userName}</h3>
                <p>{post.postContent}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Posts;

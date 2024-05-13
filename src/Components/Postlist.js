import React from "react";
import posts from "../data";
import PostCard from "./PostCard";

const Postlist = () => {
  const posrCardsList = posts.map((post) => {
    return (
      <PostCard
        title={post.title}
        description={post.description}
        likes={post.likes}
      />
    );
  });
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {posrCardsList}
    </div>
  );
};

export default Postlist;

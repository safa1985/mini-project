import React from "react";

const PostCard = ({ title, description, likes }) => {
  return (
    <div
      style={{
        border: "1px black solid ",

        width: "220px",
        height: "300px",
      }}
    >
      <h1> {title} </h1>
      <h2> {description} </h2>
      <h2> {likes} </h2>
    </div>
  );
};

export default PostCard;

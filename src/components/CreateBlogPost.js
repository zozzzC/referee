import React from "react";

const CreateBlogPost = ({ type }) => {
  return (
    <div>
      <button>Delete {type}</button>
      <button>Submit</button>
    </div>
  );
};

export default CreateBlogPost;

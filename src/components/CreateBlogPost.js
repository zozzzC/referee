import React from "react";

const CreateBlogPost = ({ type }) => {
  //when delete is clicked we want to run an async function that pushes our data into the DB

  async function submitNewPost() {}

  return (
    <div>
      <form>
        <input></input>
        <input></input>
      </form>
      <button>Delete {type}</button>
      <button>Submit</button>
    </div>
  );
};

export default CreateBlogPost;

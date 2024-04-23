"use client";
// import styles from '@/app/addPost.module.css';
import { useState } from "react";
import styles from "@/app/page.module.css";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetch("/api/postRoutes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (err) {
      console.error(err);
    }
    setTitle("");
    setContent("");
  };

  return (
    <main>
      <h1>Add Post</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Title"
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          name = "content"
          onChange={(e) => setContent(e.target.value)}
          aria-label="Content"
          required
        />

        <button type="submit" aria-label="Submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddPost;

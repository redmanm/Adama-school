import React, { useState } from "react";
import "./NewsAdmin.css";

const NewsAdmin = ({ addNews }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newArticle = {
        title,
        category,
        content,
        image: image ? URL.createObjectURL(image) : null,
        date: new Date().toLocaleDateString(),
      };
      setArticles([...articles, newArticle]);
      addNews(newArticle);
      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);
    }
  };

  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
  };

  return (
    <div className="news-admin">
      <div className="news-header">
        <h1>📰 Post a New Article</h1>
      </div>
      <form onSubmit={handleSubmit} className="news-form">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="news-input modern-input"
        />
        <input
          type="text"
          placeholder="Category (e.g., Technology, Health)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="news-input modern-input"
        />
        <textarea
          placeholder="Write your article content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="news-textarea modern-textarea"
        ></textarea>
        <div className="file-input-wrapper">
          <label htmlFor="file-input" className="custom-file-upload">
            Upload Image
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="news-file-input"
          />
        </div>
        <button type="submit" className="news-submit-button modern-button">
          Post Article
        </button>
      </form>

      {/* Display Posted News */}
      <div className="news-articles">
        {articles.map((article, index) => (
          <div key={index} className="news-card modern-card">
            {article.image && (
              <img src={article.image} alt={article.title} className="news-image" />
            )}
            <h2>{article.title}</h2>
            <p className="news-category">{article.category}</p>
            <p>{article.content}</p>
            <small>Posted on: {article.date}</small>
            <button
              className="news-delete-button modern-delete"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAdmin;

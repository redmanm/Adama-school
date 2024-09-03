import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsPage.css";

const NewsPage = ({ news = [] }) => {
  const navigate = useNavigate();
  const [likedArticles, setLikedArticles] = useState({});

  const handleImageClick = (articleId) => {
    navigate(`/news/${articleId}`);
  };

  const handleTitleClick = (articleId) => {
    navigate(`/news/${articleId}`);
  };

  const handleLikeClick = (articleId) => {
    setLikedArticles((prev) => ({
      ...prev,
      [articleId]: {
        liked: !prev[articleId]?.liked,
        count: prev[articleId]?.liked ? prev[articleId].count - 1 : (prev[articleId]?.count || 0) + 1
      }
    }));
  };

  return (
    <div className="news-page">
      <header className="news-header">
        <h1>📰 Latest News ({news.length})</h1>
      </header>
      <div className="news-list">
        {news.map((article) => {
          const liked = likedArticles[article.id]?.liked || false;
          const likeCount = likedArticles[article.id]?.count || 0;

          return (
            <div className="news-card" key={article.id}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="news-image"
                  onClick={() => handleImageClick(article.id)}
                />
              )}
              <div className="news-content">
                <h3 className="news-category">{article.category}</h3>
                <p className="news-date">{article.date}</p>
                <h2
                  className="news-title"
                  onClick={() => handleTitleClick(article.id)}
                >
                  {article.title}
                </h2>
                <p className="news-excerpt">
                  {article.content.substring(0, 100)}...
                </p>
                <button
                  className={`like-button ${liked ? 'liked' : ''}`}
                  onClick={() => handleLikeClick(article.id)}
                >
                  ❤️ Like {likeCount > 0 ? `(${likeCount})` : ''}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;

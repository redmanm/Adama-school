import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetailPage.css";

const NewsDetailPage = ({ news }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = news.find((item) => item.id === parseInt(id));

  const handleBackClick = () => {
    navigate('/news');
  };

  const handleShareClick = (platform) => {
    // Add share functionality for social media platforms
    alert(`Share on ${platform}`);
  };

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="news-detail-page">
      <header className="news-detail-header">
        <h1>{article.title}</h1>
        <p className="news-detail-date">{article.date}</p>
        <h3 className="news-detail-category">{article.category}</h3>
      </header>
      <div className="news-detail-content">
        {article.image && (
           
          <img
            src={article.image}
            alt={article.title}
            className="news-detail-image"
          />
        )}
        <p>{article.content}</p>

      </div>
      <div className="news-detail-actions">
        <button className="back-button" onClick={handleBackClick}>
          Back to News Page
        </button>
        <div className="share-buttons">
          <button onClick={() => handleShareClick('Facebook')}>Share on Facebook</button>
          <button onClick={() => handleShareClick('Twitter')}>Share on Twitter</button>
          <button onClick={() => handleShareClick('LinkedIn')}>Share on LinkedIn</button>
        </div>
      </div>
      <section className="related-articles">
        <h2>Related Articles</h2>
        <div className="related-cards">
          {news
            .filter((item) => item.id !== parseInt(id))
            .slice(0, 4)
            .map((relatedArticle) => (
              <div className="related-card" key={relatedArticle.id}>
                {relatedArticle.image && (
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="related-card-image"
                  />
                )}
                <h4 className="related-card-title">{relatedArticle.title}</h4>
                <button
                  className="related-card-button"
                  onClick={() => navigate(`/news/${relatedArticle.id}`)}
                >
                  Read More
                </button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;

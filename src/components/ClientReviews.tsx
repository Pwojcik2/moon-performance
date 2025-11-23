import '../styles/ClientReviews.css';

function ClientReviews() {
  const reviews = [
    {
      rating: 5,
      quote: "Moon Performance transformed my Evo X into an absolute beast! The attention to detail and customer service is unmatched.",
      author: "Alex R.",
      service: "Stage 3 Build"
    },
    {
      rating: 5,
      quote: "Incredible work on my STI. The team's knowledge and professionalism made the entire process smooth and enjoyable.",
      author: "Jamie T.",
      service: "Stage 2+ Build"
    },
    {
      rating: 5,
      quote: "Best in the business! My GTR has never performed better. The custom tune was worth every penny.",
      author: "Morgan K.",
      service: "Custom Tune"
    },
    {
      rating: 5,
      quote: "Exceptional service from start to finish. They truly care about their customers and it shows in their work.",
      author: "Taylor S.",
      service: "Full Build & Tune"
    }
  ];

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <span key={i} className="star-icon">⭐</span>
    ));
  };

  return (
    <section id="client-reviews" className="client-reviews-section">
      <div className="client-reviews-container">
        <h2 className="section-title">
          <span className="gradient-text">CLIENT REVIEWS</span>
        </h2>
        <div className="rating-container">
          <div className="stars">
            {renderStars(5)}
          </div>
          <p className="rating-text">Based on 109+ reviews from satisfied customers</p>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">
                {renderStars(review.rating)}
              </div>
              <p className="review-quote">"{review.quote}"</p>
              <div className="review-author">
                <span className="author-name">{review.author}</span>
                <span className="service-type">{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;

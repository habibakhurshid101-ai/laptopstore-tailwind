import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  product: string;
  comment: string;
  verified: boolean;
}

function Reviews() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Ahmed Khan',
      rating: 5,
      date: 'May 10, 2026',
      product: 'Dell XPS 15',
      comment:
        'Excellent laptop! Build quality is outstanding and performance is blazing fast. Highly recommended for professionals.',
      verified: true,
    },
    {
      id: 2,
      name: 'Sara Ali',
      rating: 5,
      date: 'May 8, 2026',
      product: 'HP Spectre x360',
      comment:
        'Beautiful design and amazing display. The 2-in-1 feature is very useful. Best purchase this year!',
      verified: true,
    },
    {
      id: 3,
      name: 'Bilal Ahmed',
      rating: 4,
      date: 'May 5, 2026',
      product: 'Lenovo ThinkPad X1',
      comment:
        'Great for business use. Keyboard is fantastic. Only wish the battery lasted a bit longer.',
      verified: true,
    },
    {
      id: 4,
      name: 'Fatima Noor',
      rating: 5,
      date: 'May 3, 2026',
      product: 'ASUS ROG Zephyrus',
      comment:
        'Gaming beast! Runs all AAA games smoothly. Cooling system is impressive. Worth every penny.',
      verified: true,
    },
    {
      id: 5,
      name: 'Hassan Raza',
      rating: 4,
      date: 'April 28, 2026',
      product: 'Dell XPS 15',
      comment:
        'Solid performance and great screen. A bit pricey but quality justifies the cost.',
      verified: false,
    },
    {
      id: 6,
      name: 'Ayesha Malik',
      rating: 5,
      date: 'April 25, 2026',
      product: 'HP Spectre x360',
      comment:
        'Perfect for creative work. The touchscreen is very responsive and the pen support is excellent.',
      verified: true,
    },
  ]);

  const [filter, setFilter] = useState<number | null>(null);

  const filteredReviews = filter
    ? reviews.filter((r) => r.rating === filter)
    : reviews;

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  const ratingCounts = [5, 4, 3, 2, 1].map(
    (rating) => reviews.filter((r) => r.rating === rating).length
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-bg-main text-text-primary">
      {/* HEADER */}
      <div className="mb-12 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Customer <span className="text-brand-primary">Reviews</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Real feedback from verified buyers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* RATING SUMMARY */}
        <div className="lg:col-span-1">
          <div className="p-8 bg-bg-card border border-border-primary rounded-md space-y-6 sticky top-24">
            <div className="text-center space-y-2">
              <div className="text-5xl font-extrabold text-brand-primary">
                {averageRating}
              </div>
              <div className="flex justify-center gap-1 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.round(parseFloat(averageRating))
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                Based on {reviews.length} reviews
              </p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating, idx) => (
                <button
                  key={rating}
                  onClick={() => setFilter(filter === rating ? null : rating)}
                  className={`w-full flex items-center gap-3 p-2 rounded-md transition-all ${
                    filter === rating
                      ? 'bg-brand-primary/20 border border-brand-primary'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm font-bold w-8">{rating}★</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: `${(ratingCounts[idx] / reviews.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-text-muted w-8">
                    {ratingCounts[idx]}
                  </span>
                </button>
              ))}
            </div>

            <button className="w-full py-3 bg-brand-primary text-white text-sm font-bold rounded-md hover:translate-y-[-2px] transition-all">
              Write a Review
            </button>
          </div>
        </div>

        {/* REVIEWS LIST */}
        <div className="lg:col-span-3 space-y-4">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-20 text-text-secondary">
              No reviews found for this rating.
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-bg-card border border-border-primary rounded-md space-y-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-primary/20 border border-brand-primary/30 rounded-full flex items-center justify-center text-xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{review.name}</h3>
                        {review.verified && (
                          <span className="px-2 py-0.5 bg-brand-accent/20 text-brand-accent text-[9px] font-bold uppercase tracking-widest rounded-full border border-brand-accent/30">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-muted">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < review.rating
                            ? 'text-yellow-400'
                            : 'text-gray-600'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-bold text-brand-primary">
                    {review.product}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="flex gap-4 pt-2 text-xs text-text-muted">
                  <button className="hover:text-brand-primary transition-all">
                    👍 Helpful (12)
                  </button>
                  <button className="hover:text-brand-primary transition-all">
                    💬 Reply
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;

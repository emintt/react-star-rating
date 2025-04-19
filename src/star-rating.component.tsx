import { useState } from "react";
import './star-rating.styles.css';

const StarRating = () => {
  const maxRating = 5;
  const [ currentRating, setCurrentRating ] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const onClickHandling = (ratingValue: number) => {
    if (ratingValue === currentRating) {
      setCurrentRating(0);
    } else {
      setCurrentRating(ratingValue);
    }
  };

  return (
    <>
      <div className="star-rating-container">
        {/* stars */}
        <p>Rating: {currentRating}</p>
        {
          [...Array(maxRating)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <p 
                key={index} 
                className={`star ${ratingValue <= (hoveredRating || currentRating) ? 'active' : ''}`}
                onClick={() => onClickHandling(ratingValue)} 
                onMouseEnter={() => {setHoveredRating(ratingValue)}}
                onMouseLeave={() => setHoveredRating(0)}
              >
                {ratingValue}
              </p>
            )
        })
        }
      </div>
    </>
  );
};

export default StarRating;
import { useCallback, useEffect, useState } from "react";
import './star-rating.styles.css';

interface StarRatingProp {
  maxRating: number;
  onChange: (arg: number) => void;
}

const StarRating = ({maxRating = 5, onChange}: StarRatingProp) => {
  
  const [ currentRating, setCurrentRating ] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const onClickHandling = useCallback((ratingValue: number) => {
    if (ratingValue === currentRating) {
      setCurrentRating(0);
    } else {
      setCurrentRating(ratingValue);
    }
  }, [currentRating]);

  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  return (
    <>
      <div className="star-rating-container">
        {/* stars */}
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
                &#9733;
              </p>
            )
        })
        }
      </div>
    </>
  );
};

export default StarRating;
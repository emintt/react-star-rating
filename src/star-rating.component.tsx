import { useCallback, useEffect, useState } from "react";
import './star-rating.styles.css';

interface StarRatingProp {
  maxRating: number;
  onChange: (arg: number) => void;
};

const StarRating = ({maxRating = 5, onChange}: StarRatingProp) => {
  
  const [ currentRating, setCurrentRating ] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // trigger onChange cb fnc when rating change
  useEffect(() => {
    onChange(currentRating);
  }, [currentRating, onChange]);

  // useCallback: run handleOnClick only when currentRating value change
  const handleOnClick = useCallback((ratingValue: number) => {
    if (currentRating === ratingValue) {
      setCurrentRating(0);
    } else {
      setCurrentRating(ratingValue);
    }
  }, [currentRating]);
  
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
                className={`star ${ratingValue <= (hoveredRating || currentRating) ? 'active': ''}`}
                onClick={() => handleOnClick(ratingValue)}
                onMouseOver={() => setHoveredRating(ratingValue)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                {ratingValue}
              </p>)
          })
        }
      </div>
    </>
  );
};

export default StarRating;
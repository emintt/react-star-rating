import { useState } from "react";
import './star-rating.styles.css';

const StarRating = () => {
  const maxRating = 5;
  const [ currentRating, setCurrentRating ] = useState(0);
  const onClickHandling = (ratingValue: number) => {
    setCurrentRating(ratingValue);
  }

  return (
    <>
      <div className="star-rating-container">
        {/* stars */}
        <p>Rating: {currentRating}</p>
        {
          [...Array(maxRating)].map((_, index) => {
            const ratingValue = index + 1;
            return <p key={index} onClick={() => onClickHandling(ratingValue)} >{ratingValue}</p>
        })
        }
      </div>
    </>
  );
};

export default StarRating;

import { useCallback, useState } from 'react'
import './App.css'
import StarRating from './star-rating.component'

function App() {
  const [starRating, setStarRatingFromChild] = useState(0);

  const handleStarRating = useCallback((starRating: number) => {
    setStarRatingFromChild(starRating);
  }, []);

  return (
    <>
      <h2>Rating: {starRating}</h2>
      <StarRating maxRating={10} onChange={handleStarRating} />
    </>
  )
}

export default App

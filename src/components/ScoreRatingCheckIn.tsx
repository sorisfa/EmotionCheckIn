import React, { useState } from 'react';

const ScoreRatingCheckIn = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRating(parseInt(event.target.value));
    };

    return (
        <div>
            <h3>Rate Your Emotion (0-5)</h3>
            <select value={rating} onChange={handleRatingChange}>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
            <p>Your Current Rating: {rating}</p>
        </div>
    );
};

export default ScoreRatingCheckIn;

import React, { useState } from 'react';

const MoodMeterCheckIn = () => {
    const [mood, setMood] = useState(0);

    const handleMoodChange = (level) => {
        setMood(level);
    };

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <div className="mood-meter">
                {[1, 2, 3, 4, 5].map(level => (
                    <button
                        key={level}
                        onClick={() => handleMoodChange(level)}
                        style={{
                            backgroundColor: mood === level ? 'gold' : 'lightgray',
                            padding: '10px',
                            margin: '5px',
                            borderRadius: '5px'
                        }}
                    >
                        {level}
                    </button>
                ))}
            </div>
            <p>Your current mood level: {mood}</p>
        </div>
    );
};

export default MoodMeterCheckIn;
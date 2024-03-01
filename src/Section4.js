import React, { useState } from 'react';
import './Section4.css'; // Import the CSS file

const AudioDeepfakeDetector = () => {
    const [selectedAudio, setSelectedAudio] = useState(null);

    const handleAudioChange = (event) => {
        const file = event.target.files[0];
        setSelectedAudio(file);
    };

    const handleButtonClick = () => {
        const audioInput = document.getElementById('audioInput');
        audioInput.click();
    };

    return (
        <div className="audio-deepfake-detector-container">
            <h2>Audio-Based Deepfake Detection Techniques</h2>
            <div className="ai_mata">
                <div>
                    <h3>Voice Biometrics</h3>
                    <p>Exploring the use of voice biometrics for detecting manipulated audio content.</p>
                </div>
                <div>
                    <h3>Spectral Analysis</h3>
                    <p>Understanding the technical aspects of spectral analysis in audio forensics.</p>
                </div>
            </div>
            <input
                id="audioInput"
                type="file"
                accept="audio/*"
                onChange={handleAudioChange}
                style={{ display: 'none' }} // Hide the input element
            />
            <button onClick={handleButtonClick}>Select Audio File</button>
            {selectedAudio && (
                <div>
                    <h3>Selected Audio:</h3>
                    <audio controls>
                        <source src={URL.createObjectURL(selectedAudio)} type={selectedAudio.type} />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default AudioDeepfakeDetector;

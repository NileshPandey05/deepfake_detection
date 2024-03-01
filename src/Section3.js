import React, { useState } from 'react';
import './Section3.css';

const ImageDeepfakeDetector = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleButtonClick = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };

    return (
        <div className="image-deepfake-detector-container">
            <h2>Image-Based Deepfake Detection Techniques</h2>
            <div className='ai_mata'>
                <div>
                    <h3>AI Approaches</h3>
                    <p>Exploring the latest AI-powered methods for identifying image-based deepfakes.</p>
                </div>
                <div>
                    <h3>Metadata Analysis</h3>
                    <p>Understanding the role of metadata in assessing the authenticity of images.</p>
                </div>
            </div>
            <input
                id="imageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }} // Hide the input element
            />
            <button onClick={handleButtonClick}>Select Image</button>
            {selectedImage && (
                <div>
                    <h3>Selected Image:</h3>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                </div>
            )}
        </div>
    );
};

export default ImageDeepfakeDetector;

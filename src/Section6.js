import React from "react";
import './Section6.css'

const ProtectingAgainstDeepfake = () => {
    return (
        <div className="protect-container">
            <h2>Best Practices for Protecting Against Deepfakes</h2>
            <div className="sub-protect-container">
                <div className="practice">
                    <h3>Education & Awareness</h3>
                    <p>Highlighting the importance of educating individuals about deepfake risks and prevention.</p>
                </div>
                <div className="practice">
                    <h3>Verification Protocols</h3>
                    <p>Implementing stringent verification processes to identify potential deepfake content.</p>
                </div>
                <div className="practice">
                    <h3>Collaborative Efforts</h3>
                    <p>Emphasizing the need for collective efforts in combating the proliferation of deepfakes.</p>
                </div>
                <div className="practice">
                    <h3>Policy Frameworks</h3>
                    <p>Developing comprehensive policies to address the ethical and legal aspects of deepfakes.</p>
                </div>
            </div>
        </div>
    );
};

export default ProtectingAgainstDeepfake;

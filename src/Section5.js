import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Section5.css'; 
const Tool = () => {
    return (
        <div className="tool-container"> {}
            <h2>Tools and Sotware for Deepfake Detection</h2>
            <div className="sub-tool-container">
            <div className="Advanced">
                <FaSearch />
                <h3>Advanced Algorithms</h3>
                <p>Utilization cutting-edge algorithms for accurate deepfake identification.</p>
            </div>
            <div className="Enhanced">
                <MdSecurity />
                <h3>Enhanced Security</h3>
                <p>Ensuring robust security to combat the threats posed by deepfake technology</p>
            </div>
            <div className="User-Friendly">
                <FaUser />
                <h3>User-Friendly UI</h3>
                <p>Intuitive user interface for simplified deepfake detection and analysis</p>
            </div>
            </div>
        </div>
    );
};

export default Tool;

import React from 'react';
import './App.css';
import DeepfakeComponent from './Section1';
import DeepfakeDetection from './Section2';
import ImageDeepfakeDetector from './Section3';
import AudioDeepfakeDetector from './Section4'
import Tool from './Section5'
import ProtectingAgainstDeepfake from './Section6'


function App() {
  return (
    <div className="App">
      <DeepfakeComponent />
      <DeepfakeDetection/>
      <ImageDeepfakeDetector /> 
      <AudioDeepfakeDetector />
      <Tool/>
      <ProtectingAgainstDeepfake/>

    </div>
  );
}

export default App;

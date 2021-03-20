import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevState) => prevState + 20);
    }, 1000);

    setTimeout(() => {
      window.clearInterval(interval);
    }, 5000);
  }, []);

  const progressInstance = (
    <ProgressBar animated now={progress} label={progress} />
  );
  return <>{progressInstance}</>;
};

export default LoadingProgress;

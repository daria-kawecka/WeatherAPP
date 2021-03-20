import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const LoadingProgress = () => {
  const progressInstance = <ProgressBar now={45} label={45} srOnly />;
  return <>{progressInstance}</>;
};

export default LoadingProgress;

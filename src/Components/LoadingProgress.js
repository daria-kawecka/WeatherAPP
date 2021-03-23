import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
import { LoadingBar } from "../shared/LoadingProgressStyled";
import { LoadingText } from "../shared/LoadingProgressStyled";
import { FiSun } from "react-icons/fi";

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    const intervalIndex = setInterval(() => {
      setProgress((prevState) => {
        if (prevState === 100) {
          clearInterval(intervalIndex);
          setIsRender(false);
          return 100;
        }
        const tempProgress = parseInt(Math.random() * 30, 10);
        return Math.min(prevState + tempProgress, 100);
      });
    }, 500);
  }, []);

  const progressInstance = (
    <ProgressBar
      variant="warning"
      animated
      now={progress}
      label={`${progress}%`}
    />
  );
  return (
    <>
      {isRender && (
        <LoadingBar>
          <LoadingText>
            <FiSun />
            Loading...
          </LoadingText>
          {progressInstance}
        </LoadingBar>
      )}
    </>
  );
};

export default LoadingProgress;

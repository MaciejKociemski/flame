import React, { useEffect, useRef } from "react";
import "./FlameAnimation.css"; 

const FlameAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const height = 80;
    const width = 100;
    const fire = new Array(height * width).fill(0);

    const drawFlame = () => {
      for (let i = 0; i < width; i++) {
        fire[i + width] = Math.floor(Math.random() * 255);
      }

      for (let y = height; y > 1; y--) {
        for (let x = 0; x < width; x++) {
          const i = y * width + x;
          fire[i] = Math.floor(
            (fire[(y - 1) * width + ((x - 1 + width) % width)] +
              fire[(y - 1) * width + ((x + width) % width)] +
              fire[(y - 1) * width + ((x + 1 + width) % width)] +
              fire[(y - 2) * width + ((x + width) % width)]) /
              4.04
          );
        }
      }

      for (let i = width * 16; i < width * height; i++) {
        const color = fire[i].toString(16);
        context.beginPath();
        context.rect(
          (i % width) * 10,
          (height - Math.floor(i / width)) * 10,
          10,
          10
        );
        context.fillStyle = `#${color}0000`;
        context.fill();
      }
    };

    const animationInterval = setInterval(drawFlame, 50);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return <canvas id="myCanvas" ref={canvasRef} />;
};

export default FlameAnimation;

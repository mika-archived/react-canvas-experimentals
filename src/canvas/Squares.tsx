import React, { useEffect, useRef } from "react";

const Squares = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current!.getContext("2d")!;

    const drawRect = (x: number, y: number) => {
      ctx.beginPath();
      ctx.rect(x, y, 50, 50);
      ctx.stroke();
    };

    drawRect(5, 5);
    drawRect(55, 55);
  });

  return (
    <div>
      <canvas ref={canvas} height={200} width={200} />
    </div>
  );
};

export default Squares;

import React, { useEffect, useRef } from "react";

const Square = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current!.getContext("2d")!;

    ctx.beginPath();
    ctx.ellipse(55, 55, 50, 50, Math.PI / 4, 0, Math.PI * 2);
    ctx.stroke();

    return () => {};
  });

  return (
    <div>
      <canvas ref={canvas} height={200} width={200} />
    </div>
  );
};

export default Square;

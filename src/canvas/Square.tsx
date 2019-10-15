import React, { useEffect, useRef } from "react";

const Square = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current!.getContext("2d")!;

    ctx.beginPath();
    ctx.rect(10, 10, 110, 110);
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

import React, { useEffect, useRef } from "react";

const BorderSquare = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current!.getContext("2d")!;

    const drawRoundedSquare = (x: number, y: number, height: number, width: number, borderRadius: number) => {
      // 自分でそれっぽい形を描くのデース！
      ctx.beginPath();
      ctx.moveTo(x + borderRadius, y);
      ctx.lineTo(x + width - borderRadius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
      ctx.lineTo(x + width, y + height - borderRadius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - borderRadius, y + height);
      ctx.lineTo(x + borderRadius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
      ctx.lineTo(x, y + borderRadius);
      ctx.quadraticCurveTo(x, y, x + borderRadius, y);
      ctx.closePath();
      ctx.stroke();
    };

    drawRoundedSquare(10, 10, 110, 110, 10);

    return () => {};
  });

  return (
    <div>
      <canvas ref={canvas} height={200} width={200} />
    </div>
  );
};

export default BorderSquare;

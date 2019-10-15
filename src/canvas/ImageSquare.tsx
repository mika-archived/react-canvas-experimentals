import React, { useEffect, useRef } from "react";

const ImageSquare = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onLoadedImage = () => {
      return new Promise((resolve, reject) => {
        const el = image.current!;
        el.onload = () => resolve();
        el.onerror = (e: Event | string) => reject(e);
      });
    };

    const drawRoundedSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, height: number, width: number, borderRadius: number) => {
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

    onLoadedImage().then(() => {
      const ctx = canvas.current!.getContext("2d")!;

      drawRoundedSquare(ctx, 10, 10, 210, 210, 20);
      ctx.clip();

      // クリップされているのをみたいので、あえて画像は crop せずに全体を表示しておく
      ctx.drawImage(image.current!, 10, 10, 1024, 1280, -170, -90, 124 * 5, 128 * 5);
    });

    return () => {};
  });

  return (
    <div>
      <canvas ref={canvas} height={300} width={300} />
      {/* Image() constructor does not supported by Android 4.4.x */}
      <img ref={image} src="./assets/004笑顔1.png" alt="img" hidden />
    </div>
  );
};

export default ImageSquare;

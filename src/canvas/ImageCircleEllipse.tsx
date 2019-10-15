import React, { useEffect, useRef } from "react";

const ImageCircleEllipse = () => {
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

    onLoadedImage().then(() => {
      const ctx = canvas.current!.getContext("2d")!;

      ctx.ellipse(105, 105, 100, 100, Math.PI / 4, 0, Math.PI * 2);
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

export default ImageCircleEllipse;

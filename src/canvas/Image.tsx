import React, { useEffect, useRef } from "react";

const SquareAnimation = () => {
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

    const ctx = canvas.current!.getContext("2d")!;
    onLoadedImage().then(() => {
      // assets image is too large for rendering on storybook, crop it
      // see also: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
      ctx.drawImage(image.current!, 10, 10, 1024, 1280, 10, 10, 280, 280);
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

export default SquareAnimation;

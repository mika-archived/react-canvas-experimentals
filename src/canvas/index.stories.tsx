import React from "react";
import { storiesOf } from "@storybook/react";

import BorderedImageCircleArc from "./BorderedImageCircleArc";
import CircleArc from "./CircleArc";
import CircleEllipse from "./CircleEllipse";
import Image from "./Image";
import ImageCircleArc from "./ImageCircleArc";
import ImageCircleEllipse from "./ImageCircleEllipse";
import ImageSquare from "./ImageSquare";
import RoundedSquare from "./RoundedSquare";
import Square from "./Square";
import Squares from "./Squares";

storiesOf("Canvas", module)
  .add("BorderedImageCircleArc", () => <BorderedImageCircleArc />)
  .add("CircleArc", () => <CircleArc />)
  .add("CircleEllipse", () => <CircleEllipse />)
  .add("Image", () => <Image />)
  .add("ImageCircleArc", () => <ImageCircleArc />)
  .add("ImageCircleEllipse", () => <ImageCircleEllipse />)
  .add("ImageSquare", () => <ImageSquare />)
  .add("RoundedSquare", () => <RoundedSquare />)
  .add("Square", () => <Square />)
  .add("Squares", () => <Squares />);

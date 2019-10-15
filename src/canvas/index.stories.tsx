import React from "react";
import { storiesOf } from "@storybook/react";

import Circle from "./Circle";
import Image from "./Image";
import ImageCircle from "./ImageCircle";
import ImageSquare from "./ImageSquare";
import RoundedSquare from "./RoundedSquare";
import Square from "./Square";
import Squares from "./Squares";

storiesOf("Canvas", module)
  .add("Circle", () => <Circle />)
  .add("Image", () => <Image />)
  .add("ImageCircle", () => <ImageCircle />)
  .add("ImageSquare", () => <ImageSquare />)
  .add("RoundedSquare", () => <RoundedSquare />)
  .add("Square", () => <Square />)
  .add("Squares", () => <Squares />);

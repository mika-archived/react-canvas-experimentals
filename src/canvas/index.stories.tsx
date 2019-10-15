import React from "react";
import { storiesOf } from "@storybook/react";

import Circle from "./Circle";
import Image from "./Image";
import RoundedSquare from "./RoundedSquare";
import Square from "./Square";
import Squares from "./Squares";

storiesOf("Canvas", module)
  .add("Circle", () => <Circle />)
  .add("Image", () => <Image />)
  .add("RoundedSquare", () => <RoundedSquare />)
  .add("Square", () => <Square />)
  .add("Squares", () => <Squares />);

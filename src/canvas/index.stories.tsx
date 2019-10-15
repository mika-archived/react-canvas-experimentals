import React from "react";
import { storiesOf } from "@storybook/react";

import BorderSquare from "./BorderSquare";
import Square from "./Square";
import Squares from "./Squares";

storiesOf("Canvas", module)
  .add("Square", () => <Square />)
  .add("Squares", () => <Squares />)
  .add("BorderSquare", () => <BorderSquare />);

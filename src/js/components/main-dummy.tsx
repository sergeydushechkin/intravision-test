import * as React from "react";
import Requests from "./requests";

import Search from "./search";

interface Props {
  text: string;
}

const MainDummy:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <main className="main-dummy">
      <h1 className="main-dummy__header">{props.text}</h1>
    </main>
  );
};

export default MainDummy;

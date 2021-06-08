import * as React from "react";
import Requests from "./requests";

import Search from "./search";

interface Props {

}

const MainPage:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <main className="main-page">
      <h1 className="visually-hidden">Requests</h1>
      <Search />
      <Requests />
    </main>
  );
};

export default MainPage;

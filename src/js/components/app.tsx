import * as React from "react";
import MainHeader from "./main-header";
import MainPage from "./main-page";

interface Props {

}

const App:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="container">
      <MainHeader />
      <MainPage />
    </div>
  );
};

export default App;

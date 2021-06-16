import * as React from "react";
import {MenuItems} from "../const";
import MainDummy from "./main-dummy";
import MainHeader from "./main-header";
import MainPage from "./main-page";

interface Props {

}

const App:React.FunctionComponent<Props> = (props: Props) => {
  const [menuId, setMenuId] = React.useState(1);

  return (
    <div className="container">
      <MainHeader items={MenuItems} activeId={menuId} onClick={setMenuId}/>
      {
        menuId === 1
          ? <MainPage />
          : <MainDummy text={MenuItems[menuId].name}/>
      }
    </div>
  );
};

export default App;

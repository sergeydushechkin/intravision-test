import * as React from "react";
import Table from "./table";

interface Props {

}

const Workspace:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="requests__workspace workspace workspace--short">
      <div className="workspace__options options">
        <button className="options__create button" type="button">Создать заявку</button>
      </div>

      <div className="workspace__table-container">
        <Table />
      </div>
    </div>
  );
};

export default Workspace;

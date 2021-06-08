import * as React from "react";
import Detail from "./detail";

interface Props {

}

const Details:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="requests__details details">
      <Detail />
    </div>
  );
};

export default Details;

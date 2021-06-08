import * as React from "react";
import Details from "./details";
import Workspace from "./workspace";

interface Props {

}

const Requests:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className="main-page__requests requests">
      <h2 className="visually-hidden">Requests</h2>
      <Workspace />
      <Details />
    </section>
  );
};

export default Requests;

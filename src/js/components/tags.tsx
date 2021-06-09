import * as React from "react";

interface Props {

}

const Tags:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <ul className="property__tags tags">
      <li className="tags__item">Сервер 1</li>
      <li className="tags__item">mb_support_mymercedes</li>
    </ul>
  );
};

export default Tags;

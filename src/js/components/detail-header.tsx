import * as React from "react";

interface Props {
  title: string;
  text: string;
  onClose: () => void;
}

const DetailHeader:React.FunctionComponent<Props> = (props: Props) => {
  const {title, text, onClose} = props;
  return (
    <div className={`detail__detail-header detail-header ${text && `detail-header--text`}`}>
      <h3 className="detail-header__title">{title}</h3>
      {
        text && <div className="detail-header__text">{text}</div>
      }
      <div className="detail-header__close" onClick={() => onClose()}><span className="visually-hidden">Close</span></div>
    </div>
  );
};

export default DetailHeader;

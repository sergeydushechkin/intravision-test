import * as React from "react";

interface Props {

}

const New:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="detail__new new">
      <form className="new__form" method="POST" action=".">
        <div className="new__item">
          <label className="new__label title" htmlFor="title">Название</label>
          <textarea name="title" id="title" className="new__text new__text--title" cols={87} rows={4}></textarea>
        </div>
        <div className="new__item">
          <label className="new__label title" htmlFor="description">Описание</label>
          <textarea name="description" id="description" className="new__text new__text--description" cols={87} rows={7}></textarea>
        </div>
        <div className="new__item">
          <button className="new__button button button--detail" type="button">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default New;

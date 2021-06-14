import * as React from "react";
import Comments from "./comments";
import Properties from "./properties";

interface Props {

}

const Edit:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="detail__edit edit">
      <div className="edit__data data">
        <div className="data__text text">
          <h3 className="text__header title">Описание</h3>
          <p className="text__description">Длительное время занимает сохранение продажи (вне зависимости от кол-ва добавленных товаров). Проверить, почему занимает столько времени. Это третья строка Это третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строка  третья строка  тья строка  тья строка  конец!</p>
        </div>
        <div className="data__add-comment add-comment">
          <label className="add-comment__label title" htmlFor="add-comment">Добавление комментариев</label>
          <textarea className="add-comment__text" id="add-comment" name="add-comment" cols={78} rows={3}></textarea>
        </div>
        <div className="data__item">
          <button className="data__button button button--detail" type="button">Сохранить</button>
        </div>
        <Comments />
      </div>

      <Properties />

    </div>
  );
};

export default Edit;

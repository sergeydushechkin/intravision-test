import * as React from "react";

interface Props {

}

const Comments:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="data__comments comments">
      <ul className="comments__list">
        <li className="comments__comment comment">
          <div className="comment__container">
            <div className="comment__avatar"><span className="visually-hidden">Avatar</span></div>
            <div className="comment__info">
              <div className="comment__author">Иванов Александр</div>
              <div className="comment__date">12 августа, 10:00 прокомментировал</div>
            </div>
          </div>
          <div className="comment__text">
            Длительное время занимает сохранение продажи (вне зависимости от кол-ва добавленных товаров). Проверить, почему занимает столько времени. Это третья строка Это третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Comments;

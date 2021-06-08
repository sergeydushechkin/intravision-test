import * as React from "react";
import Comments from "./comments";

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

      <div className="edit__properties properties">
        <ul className="properties__list">
          <li className="properties__property-status property-status">
            <div className="property-status__container">
              <div className="property-status__indicator indicator indicator--red"></div>
              <span className="property-status__text">
                В работе
              </span>
            </div>
            <div className="property-status__statuses statuses">
              <ul className="statuses__list">
                <li className="statuses__item">
                  <div className="statuses__indicator indicator indicator--red"></div>
                  <a className="statuses__link" href="" data-id="1">Иванов Денис</a>
                </li>
                <li className="statuses__item">
                  <div className="statuses__indicator indicator indicator--yellow"></div>
                  <a className="statuses__link" href="" data-id="2">Петров Иван</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="properties__property properties__property--applicant property">
            <h3 className="property__title title">Заявитель</h3>
            <div className="property__data">Александр Вознесенский</div>
          </li>
          <li className="properties__property property">
            <h3 className="property__title title">Создана</h3>
            <div className="property__data">Маркова Анна</div>
          </li>
          <li className="properties__property property">
            <h3 className="property__title title">Исполнитель</h3>
            <div className="property__data property__data--executor">
              <a className="property__link" href="">Кожин Игорь</a>
              <div className="property__selector selector">
                <input className="selector__field" type="text" name="selector" value="Ива" />
                <ul className="selector__list">
                  <li className="selector__item">
                    <a className="selector__link" href="" data-id="1">Иванов Денис</a>
                  </li>
                  <li className="selector__item">
                    <a className="selector__link" href="" data-id="2">Петров Иван</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="properties__property property">
            <h3 className="property__title title">Приоритет</h3>
            <div className="property__data">Высокий</div>
          </li>
          <li className="properties__property property">
            <h3 className="property__title title">Срок</h3>
            <div className="property__data property__data--calendar">12.11.2018 г.</div>
          </li>
          <li className="properties__property property">
            <h3 className="property__title title">Теги</h3>
            <ul className="property__tags tags">
              <li className="tags__item">Сервер 1</li>
              <li className="tags__item">mb_support_mymercedes</li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Edit;

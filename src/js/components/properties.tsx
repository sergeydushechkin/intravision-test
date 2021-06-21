import * as React from "react";
import Tags from "./tags";

interface Props {

}

const Properties:React.FunctionComponent<Props> = (props: Props) => {
  return (
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
          <Tags tags={[{id: 123, name: `Сервер 1`}, {id: 456, name: `mb_support_mymercedes`}]}/>
        </li>
      </ul>
    </div>
  );
};

export default Properties;

import * as React from "react";

interface Props {

}

const Table:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <table className="workspace__table table table--short">
      <thead className="table__head">
        <tr className="table__head-row">
          <th className="table__header table__header--priority"><span className="visually-hidden">Приоритет</span></th>
          <th className="table__header table__header--id"><span className="table__header-container">ID</span></th>
          <th className="table__header table__header--title"><span className="table__header-container">Название</span></th>
          <th className="table__header table__header--status"><span className="table__header-container">Статус</span></th>
          <th className="table__header table__header--executor"><span className="table__header-container">Исполнитель</span></th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--high">
              <span className="visually-hidden">Высокий</span>
            </div>
          </td>
          <td className="table__cell">50 061</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status--open">открыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--medium">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">50 062</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>
        <tr className="table__body-row">
          <td className="table__cell">
            <div className="table__priority table__priority--high">
              <span className="visually-hidden">Средний</span>
            </div>
          </td>
          <td className="table__cell">66 555</td>
          <td className="table__cell">Не работает кнопка печати</td>
          <td className="table__cell table__cell--status"><span className="table__status status status-close">закрыта</span></td>
          <td className="table__cell">Менеджеров Сергей</td>
        </tr>

      </tbody>
    </table>
  );
};

export default Table;

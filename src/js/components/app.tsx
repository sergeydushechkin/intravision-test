import * as React from "react";

const App = () => {
  return (
    <div className="container">

      <header className="main-header">
        <div className="main-header__logo logo">
          <img className="logo__image" src="img/logo.png" width="52" height="44" alt="logo" />
        </div>
        <nav className="main-header__main-menu main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--base" href="#">База знаний</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--requests main-menu__link--active">Заявки</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--staff" href="#">Сотрудники</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--clients" href="#">Клиенты</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--actives" href="#">Активы</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link main-menu__link--settings" href="#">Настройки</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-page">
        <h1 className="visually-hidden">Requests</h1>

        <section className="main-page__search search">
          <h2 className="visually-hidden">Search</h2>
          <div className="search__input-container">
            <input className="search__input" type="text" />
          </div>
        </section>

        <section className="main-page__requests requests">
          <h2 className="visually-hidden">Requests</h2>

          <div className="requests__workspace workspace workspace--short">
            <div className="workspace__options options">
              <button className="options__create button" type="button">Создать заявку</button>
            </div>

            <div className="workspace__table-container">
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
            </div>
          </div>

          <div className="requests__details details">
            <div className="details__detail detail">
              <div className="detail__detail-header detail-header">
                <h3 className="detail-header__title">Новая заявка</h3>
                <div className="detail-header__close"><span className="visually-hidden">Close</span></div>
              </div>
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
            </div>

            <div className="details__detail detail">
              <div className="detail__detail-header detail-header detail-header--text">
                <h3 className="detail-header__title">№67 304</h3>
                <div className="detail-header__text">Просьба оценить разработку рекламного баннера на новорижском шоссе.<br />Форматы 600x500x30. Материал - полиестирол хорошего качества.</div>
                <div className="detail-header__close"><span className="visually-hidden">Close</span></div>
              </div>

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
            </div>
          </div>
        </section>


      </main>
    </div>
  );
};

export default App;

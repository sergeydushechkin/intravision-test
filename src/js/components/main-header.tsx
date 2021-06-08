import * as React from "react";

interface Props {

}

const MainHeader:React.FunctionComponent<Props> = (props: Props) => {
  return (
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
  );
};

export default MainHeader;

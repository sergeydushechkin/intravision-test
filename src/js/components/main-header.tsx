import * as React from "react";

interface Props {
  items: Array<{
      id: number;
      name: string;
      class: string;
    }>
  activeId: number;
  onClick: (number) => void;
}

const MainHeader:React.FunctionComponent<Props> = (props: Props) => {
  const {items, activeId, onClick} = props;

  return (
    <header className="main-header">
      <div className="main-header__logo logo">
        <img className="logo__image" src="img/logo.png" width="52" height="44" alt="logo" />
      </div>
      <nav className="main-header__main-menu main-menu">
        <ul className="main-menu__list">
          {
            items.map((it) => {
              const isActive = it.id === activeId;
              return (
                <li key={it.id} className="main-menu__item">
                  <a
                    className={`main-menu__link ${it.class} ${isActive && `main-menu__link--active`}`}
                    href="#"
                    onClick={(evt) => {
                      if (!isActive) {
                        evt.preventDefault();
                        onClick(it.id);
                      }
                    }}>
                    {it.name}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

import * as React from "react";

interface Props {

}

const Search:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section className="main-page__search search">
      <h2 className="visually-hidden">Search</h2>
      <div className="search__input-container">
        <input className="search__input" type="text" />
      </div>
    </section>
  );
};

export default Search;

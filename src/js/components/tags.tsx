import * as React from "react";

interface Props {
  tags: Array<{
    id: number;
    name: string;
  }>;
}

const Tags:React.FunctionComponent<Props> = (props: Props) => {
  const {tags} = props;
  return (
    <ul className="property__tags tags">
      {
        tags.map((it) => {
          return (<li key={it.id} className="tags__item" data-id={it.id}>{it.name}</li>);
        })
      }
    </ul>
  );
};

export default Tags;

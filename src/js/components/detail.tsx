import * as React from "react";
import DetailHeader from "./detail-header";
import Edit from "./edit";
import New from "./new";

interface Props {

}

const Detail:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="details__detail detail">
        <DetailHeader
          title={`Новая заявка`}
          text={``}
          onClose={() => console.log(`header1`)}
        />
        <New />
      </div>

      <div className="details__detail detail">
        <DetailHeader
          title={`№67 304`}
          text={`Просьба оценить разработку рекламного баннера на новорижском шоссе. Форматы 600x500x30. Материал - полиестирол хорошего качества.`}
          onClose={() => console.log(`header2`)}
        />
        <Edit />
      </div>
    </React.Fragment>
  );
};

export default Detail;

import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { selectGameField } from "../../shared/lib/store/game/game.selectors";

import { Template } from "../../shared";
import { FieldCell } from "../cell";

export const Field = () => {
  const data = useSelector(selectGameField);
  return (
    <>
      {data?.map((row, y) => (
        <Template.Row key={uuid()}>
          {row.map((value, x) => (
            <FieldCell key={uuid()} row={y} col={x} value={value} />
          ))}
        </Template.Row>
      ))}
    </>
  );
};

// export const neighborsPositions = (y: number, x: number, size: number) => {
// 	const positions = []
// 	for (let i = -1; i <= 1; i += 1) {
// 	  const y1 = y + i
// 	  if (y1 < 0 || y1 >= size) continue
// 	  for (let j = -1; j <= 1; j += 1) {
// 		const x1 = x + j
// 		if (x1 < 0 || x1 >= size) continue
// 		if (y1 === y && x1 === x) continue
// 		positions.push([y1, x1])
// 	  }
// 	}
// 	return positions
//   }

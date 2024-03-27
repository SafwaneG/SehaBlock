import { memoize } from "proxy-memoize";
import selectSelected from "../selected";
import selectDetailedOneById from "../detailedOneById";

const detailedSelected = memoize((state) => {
  const selectedId = selectSelected(state);
  return selectDetailedOneById({ state, id: selectedId });
});

export default detailedSelected;

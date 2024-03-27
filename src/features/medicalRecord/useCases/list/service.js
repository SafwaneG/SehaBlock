import { useSelector } from "react-redux";

import selectors from "features/medicalRecord/selectors";

function useUserTable() {
  const records = useSelector((state) => selectors.all(state));
  const recordIds = useSelector((state) => selectors.filteredIds(state));
  return { recordIds, records };
}

export default useUserTable;

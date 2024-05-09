import { useSelector } from "react-redux";

import selectors from "features/patients/selectors";

function useUserTable() {
  const patients = useSelector((state) => selectors.all(state));
  const patientsIds = useSelector((state) => selectors.filteredIds(state));
  return { patientsIds, patients };
}

export default useUserTable;

import { useSelector } from "react-redux";

import selectors from "features/prescription/selectors";
import authSelectors from "features/auth/selectors";

function useUserTable() {
  const prescriptions = useSelector((state) => selectors.all(state));
  const prescriptionIds = useSelector((state) => selectors.filteredIds(state));
  const { userNature } = useSelector((state) => authSelectors.user(state));
  return { prescriptionIds, prescriptions, userNature };
}

export default useUserTable;

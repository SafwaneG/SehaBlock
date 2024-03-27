import { useSelector } from "react-redux";

import selectors from "features/authorisedDoctors/selectors";

function useUserTable() {
  const authorisedDoctors = useSelector((state) => selectors.all(state));
  const doctorsIds = useSelector((state) => selectors.filteredIds(state));
  return { doctorsIds, authorisedDoctors };
}

export default useUserTable;

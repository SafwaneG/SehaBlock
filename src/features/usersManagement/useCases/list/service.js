import { useSelector } from "react-redux";
import selectAll from "features/usersManagement/selectors/all/index";
import selectors from "features/usersManagement/selectors";
function useUserTable() {
  const userIds = useSelector((state) => selectors.filteredIds(state));
  const users = useSelector((state) => selectAll(state));

  return { users, userIds };
}

export default useUserTable;

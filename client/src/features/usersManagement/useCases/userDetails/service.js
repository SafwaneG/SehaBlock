import {  useSelector } from "react-redux";
import selectors from "features/usersManagement/selectors";
function useDetailsUser() {
  const selectedUser = useSelector(selectors.detailedSelected)
  return { selectedUser };
}

export default useDetailsUser;

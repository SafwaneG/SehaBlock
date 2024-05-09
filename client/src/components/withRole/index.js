import { useSelector } from "react-redux";
import authSelectors from "features/auth/selectors";
function ProtectedRole({ roles = [], children }) {
  const { userNature } = useSelector(authSelectors.user);
  if (roles.includes(userNature)) {
    return children;
  }
  return;
}

export default ProtectedRole;

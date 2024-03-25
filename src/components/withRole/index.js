import { useSelector } from "react-redux";
import authSelectors from "features/auth/selectors";
function ProtectedRole({ roles = [], children }) {
  const { role } = useSelector(authSelectors.user);
  if (roles.includes(role)) {
    return children;
  }
  return;
}

export default ProtectedRole;

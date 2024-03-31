import { useSelector } from "react-redux";
import selectors from "features/prescription/selectors";
function useDetailsUser() {
  const selectedPrescreption = useSelector((state) =>
    selectors.detailedSelected(state)
  );
  return { selectedPrescreption };
}

export default useDetailsUser;

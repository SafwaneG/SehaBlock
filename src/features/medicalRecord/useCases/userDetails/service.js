import { useSelector } from "react-redux";
import selectors from "features/medicalRecord/selectors";
function useDetailsUser() {
  const selectedRecord = useSelector((state) =>
    selectors.detailedSelected(state)
  );
  console.log(selectedRecord, "kkd");
  return { selectedRecord };
}

export default useDetailsUser;

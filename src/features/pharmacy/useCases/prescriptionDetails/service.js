import { useSelector } from "react-redux";
import selectors from "features/prescription/selectors";
function useDetailsUser() {
  const selectedPrescreption = useSelector((state) =>
    selectors.detailedSelected(state)
  );
  const handleSignByPharmacy = (medication) => {
    console.log(medication, "medication");
  };
  return { selectedPrescreption };
}

export default useDetailsUser;

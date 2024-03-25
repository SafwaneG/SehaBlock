import Modale from "components/modal";
import SignUpForm from "./signUp";

export default function SignUp(props) {
  return (
    <Modale
      open={props.open}
      handleClose={props.handleClose}
      width="40%"
      renderContent={<SignUpForm accountAddress={props.accountAddress} />}
    />
  );
}

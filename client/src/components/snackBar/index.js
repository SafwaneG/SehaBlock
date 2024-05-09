import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import errors from "store/errors";
import { useSelector, useDispatch } from "react-redux";
import errorActions from "store/errors/actions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
  const dispatch = useDispatch();
  const { isSuccess, show, message } = useSelector(errors.selectors.error);

  const [open, setOpen] = React.useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setTimeout(() => {
      dispatch(errorActions.cleaned());
    }, 100);
  };

  React.useEffect(() => {
    if (show && message) setOpen(true);
  }, [show, message]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      sx={{ width: 500 }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={!isSuccess ? "error" : "success"}
        onClose={handleClose}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

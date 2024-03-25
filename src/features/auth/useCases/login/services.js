import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import isEmail from "../../../../helpers/validators/isEmail";
import { useDispatch, useSelector } from "react-redux";
import actions from "features/auth/actions";
import selectors from "features/auth/selectors";
import helpers from "helpers";
import config from "config";

export default function useLogin() {
  
  React.useEffect(() => {
    helpers.persister.remove({ key: config.localStorage?.userPersistKey });
    helpers.persister.remove({ key: config.localStorage?.tokenPersistKey });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector(selectors.user);

  const [resetPassword, setResetPassword] = useState(false);
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
    resetPasswordEmail: "",
  });

  const [error, setError] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const user = useSelector(selectors.user);
  const token = useSelector(selectors.token);

  const handleInputChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigateUser = (role) => {
    if (role === "manager" || role === "admin" || role === "demandeur") {
      navigate("/dashboard/requestList");
    } else if (
      role === "technician" ||
      role === "respoStock" ||
      role === "ingenieur"
    ) {
      navigate("/dashboard/taskList");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const { email, password } = loginData;
    if (!email || !password) {
      setError(true);
      return;
    }
    dispatch(actions.login(loginData));
    // navigateUser(role);
  };
  const handleShowPassword = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  // Email Validation
  const handleEmailBlur = () => {
    if (!isEmail(loginData.email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handleForgetPasswordClicked = () => {
    setResetPassword((prevState) => !prevState);
  };

  const handleResetPassword = () => {
    dispatch(actions.resetPassword({ email: loginData.resetPasswordEmail }));
  };

  useEffect(() => {
    if (user && token) {
      navigateUser(role);
    } else {
      navigate("/");
    }
  }, [user, token]);

  return {
    handleInputChange,
    handleSubmit,
    handleShowPassword,
    handleEmailBlur,
    loginData,
    error,
    emailValid,
    showPassword,
    resetPassword,
    handleForgetPasswordClicked,
    handleResetPassword,
  };
}

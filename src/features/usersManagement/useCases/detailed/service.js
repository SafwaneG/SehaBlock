import { useState } from "react";
import rolesSelector from "features/roleManagment/selectors";
import gradeSelector from "features/gradeManagement/selectors/all/index";
import serviceSelector from "features/serviceManagement/selectors/all/index";
import { useSelector } from "react-redux";
import selectors from "features/usersManagement/selectors";
import helpers from "helpers";

function useDetailed(user) {
  const processRoles = useSelector((state) =>
    rolesSelector.rolesByType({ state, type: "process" })
  );
  const serviceRoles = useSelector((state) =>
    rolesSelector.rolesByType({ state, type: "service" })
  );

  const grades = Object.values(useSelector(gradeSelector));
  const services = Object.values(useSelector(serviceSelector));
  const data = user || {
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    grade: "",
    service: "",
    role: "",
    serviceRole: "",
  };
  const [formData, setFormData] = useState({
    ...data,
  });

  const isValidEmail = helpers.validator.isEmail(formData.email);
  const isValidPhone = helpers.validator.isMobilePhone(formData.telephone);
  const isEmailAlreadyUsed = useSelector((state) =>
    selectors.isEmailAlreadyUsed({ state, email: formData.email })
  );
  const validation = { isValidEmail, isValidPhone, isEmailAlreadyUsed };

  const [userFirstNameFilledError, setUserFirstNameFilledError] =
    useState(false);
  const [userLastNameFilledError, setUserLastNameFilledError] = useState(false);
  const [userPhoneFilledError, setUserPhoneFilledError] = useState(false);
  const [userGradeFilledError, setUserGradeFilledError] = useState(false);
  const [userServiceFilledError, setUserServiceFilledError] = useState(false);
  const [userProcessRoleFilledError, setUserProcessRoleFilledError] =
    useState(false);
  const [userServiceRoleFilledError, setUserServiceRoleFilledError] =
    useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleBlur = (e) => {
    if (e.target.name === "firstName") {
      setUserFirstNameFilledError(e.target.value === "");
    } else if (e.target.name === "lastName") {
      setUserLastNameFilledError(e.target.value === "");
    } else if (e.target.name === "phone") {
      setUserPhoneFilledError(e.target.value === "");
    } else if (e.target.name === "grade") {
      setUserGradeFilledError(e.target.value === "");
    } else if (e.target.name === "service") {
      setUserServiceFilledError(e.target.value === "");
    } else if (e.target.name === "processRole") {
      setUserProcessRoleFilledError(e.target.value === "");
    } else if (e.target.name === "serviceRole") {
      setUserServiceRoleFilledError(e.target.value === "");
    }
  };
  return {
    formData,
    processRoles,
    serviceRoles,
    grades,
    services,
    handleChange,
    handleBlur,
    userFirstNameFilledError,
    userLastNameFilledError,
    userPhoneFilledError,
    userGradeFilledError,
    userServiceFilledError,
    userProcessRoleFilledError,
    userServiceRoleFilledError,
    validation,
  };
}

export default useDetailed;

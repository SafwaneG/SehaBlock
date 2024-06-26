import { useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "features/auth/selectors";
import helpers from "helpers";

function useDetailed(record) {
  const user = useSelector((state) => authSelectors.user(state));
  const userNature = user?.userNature;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    consultationDate: "",
    diagnostic: "",
    medicalObservation: "",
    diagnosticResult: "",
    treatment: "",
  });

  const [userFirstNameFilledError, setUserFirstNameFilledError] =
    useState(false);
  const [userLastNameFilledError, setUserLastNameFilledError] = useState(false);
  const [userAgeFilledError, setUserAgeFilledError] = useState(false);
  const [consultationDateFilledError, setConsultationDateFilledError] =
    useState(false);
  const [diagnosticFilledError, setDiagnosticFilledError] = useState(false);
  const [medicalObervationFilledError, setMedicalObervationFilledError] =
    useState(false);
  const [diagnosticResultFilledError, setDiagnosticResultFilledError] =
    useState(false);
  const [treatmentFilledError, setTreatmentFilledError] = useState(false);

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
    } else if (e.target.name === "age") {
      setUserAgeFilledError(e.target.value === "");
    } else if (e.target.name === "consultationDate") {
      setConsultationDateFilledError(e.target.value === "");
    } else if (e.target.name === "diagnostic") {
      setDiagnosticFilledError(e.target.value === "");
    } else if (e.target.name === "medicalObservation") {
      setMedicalObervationFilledError(e.target.value === "");
    } else if (e.target.name === "diagnosticResult") {
      setDiagnosticResultFilledError(e.target.value === "");
    } else if (e.target.name === "treatment") {
      setTreatmentFilledError(e.target.value === "");
    }
  };
  const newRecord = {
    firstName: record?.Fname === undefined ? formData.firstName : record?.Fname,
    lastName: record?.Lname === undefined ? formData.lastName : record?.Lname,
    age: record?.age === undefined ? formData.age : record?.age,
    consultationDate: formData.consultationDate,
    diagnostic: formData.diagnostic,
    medicalObservation: formData.medicalObservation,
    diagnosticResult: formData.diagnosticResult,
    treatment: formData.treatment,
  };

  return {
    formData,
    newRecord,
    handleChange,
    handleBlur,
    userFirstNameFilledError,
    userLastNameFilledError,
    userAgeFilledError,
    consultationDateFilledError,
    diagnosticFilledError,
    medicalObervationFilledError,
    diagnosticResultFilledError,
    treatmentFilledError,
    userNature,
  };
}

export default useDetailed;

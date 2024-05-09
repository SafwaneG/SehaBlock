import { useState } from "react";
import { useSelector } from "react-redux";
import authSelectors from "features/auth/selectors";
import patientSelectors from "features/patients/selectors";
import helpers from "helpers";

function useDetailed(prescription) {
  const medicationsArray = [
    {
      medicationId: "",
      medicationName: "",
      quantity: "",
      dosage: "",
      signedByPharmacie: false,
    },
  ];
  const user = useSelector((state) => authSelectors.user(state));
  const patient = useSelector((state) =>
    patientSelectors.detailedSelected(state)
  );
  const userNature = user?.userNature;

  const [formData, setFormData] = useState({
    signedByDoctor: false,
    signedByPatient: false,
    medications: medicationsArray,
    patientAddress: patient.doctorAddress,
  });

  const [patientAddressFilledError, setPatientAddressFilledError] =
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
    if (e.target.name === "patientAddress") {
      setPatientAddressFilledError(e.target.value === "");
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

  const handleAddMedication = (e) => {
    e.preventDefault();
    const newArray = [...formData.medications];
    newArray.push({
      medicationId: "",
      medicationName: "",
      quantity: "",
      dosage: "",
      signedByPharmacie: false,
    });
    setFormData((prevData) => ({ ...prevData, medications: newArray }));
  };
  const updateMedication = (index) => (e) => {
    const newArray = formData.medications.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      } else {
        return item;
      }
    });
    setFormData((prevData) => ({ ...prevData, medications: newArray }));
  };
  const handleRemoveMedication = (index) => {
    if (formData.medications.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        medications: medicationsArray,
      }));
    } else {
      const newMedications = formData.medications.filter(
        (item, i) => index !== i
      );
      setFormData((prevData) => ({
        ...prevData,
        medications: newMedications,
      }));
    }
  };

  const newPrescription = {
    ...prescription,
    ...formData,
  };

  return {
    formData,
    handleChange,
    handleBlur,
    userNature,
    updateMedication,
    handleAddMedication,
    handleRemoveMedication,
    patientAddressFilledError,
    prescription,
    newPrescription,
    patient,
  };
}

export default useDetailed;

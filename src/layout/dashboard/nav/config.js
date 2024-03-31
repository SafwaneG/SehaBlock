// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.png`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    usersAuth: ["patient"],
    title: "Medical Records",
    path: "/dashboard/medicalRecord",
    icon: icon("medical-records"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["patient"],
    title: "Authorised Doctors",
    path: "/dashboard/authorisedDoctors",
    icon: icon("doctor"),
    expand: false,
    divider: true,
  },
  {
    usersAuth: ["doctor"],
    title: "Patients",
    path: "/dashboard/patients",
    icon: icon("examination"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["patient", "doctor"],
    title: "Prescriptions",
    path: "/dashboard/prescriptions",
    icon: icon("prescription"),
    expand: false,
    divider: true,
  },
];

export default navConfig;

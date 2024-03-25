// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    usersAuth: ["demandeur", "admin"],
    title: "Ajouter une nouvelle demande",
    path: "/dashboard/request",
    icon: icon("bxs-plus-circle"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["demandeur", "admin", "manager"],
    title: "Liste Des Demandes",
    path: "/dashboard/requestList",
    icon: icon("clipboard-list-outline"),
    expand: false,
    divider: true,
  },
  {
    usersAuth: ["technician", "admin", "ingenieurs", "respoStock"],
    title: "Mes taches",
    path: "/dashboard/taskList",
    icon: icon("bx-task"),
    expand: false,
    divider: true,
  },
  {
    usersAuth: ["admin"],
    title: "Gestion des utilisateurs",
    path: "/dashboard/users",
    // icon: icon("bx-task"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["admin"],
    title: "Gestion des roles",
    path: "/dashboard/roles",
    // icon: icon("bx-task"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["admin"],
    title: "Gestion des services",
    path: "/dashboard/services",
    // icon: icon("bx-task"),
    expand: false,
    divider: false,
  },
  {
    usersAuth: ["admin"],
    title: "Gestion des grades",
    path: "/dashboard/grades",
    // icon: icon("bx-task"),
    expand: false,
    divider: true,
  },

  // {
  //   usersAuth : ["x", "admin"],
  //   title: 'Liste des notifications',

  //   path: '/dashboard/notifications',
  //   icon: icon('bx-bell'),
  //   expand: false,
  //   divider:false
  // },
  // {
  //   usersAuth: ["respoStock", "admin"],
  //   title: "BackOffice",

  //   path: "/dashboard/backoffice",
  //   icon: icon("bxs-collection"),
  //   expand: true,
  //   divider: false,
  //   expandData: [
  //     {
  //       title: "Gestion des matériaux",
  //       path: "/dashboard/backoffice/gestion-materiaux",
  //     },
  //     {
  //       title: "Gestion des fournisseurs",
  //       path: "/dashboard/backoffice/gestion-fournisseurs",
  //     },
  //     {
  //       title: "Liste des services",
  //       path: "/dashboard/backoffice/liste-services",
  //     },
  //   ],
  // },
];

export default navConfig;

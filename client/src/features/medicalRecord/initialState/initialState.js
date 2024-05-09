import { faker } from "@faker-js/faker";
function generateRandomNumber(x) {
  return Math.floor(Math.random() * x); // Generates a random number between 0 and 6
}
const processRoles = [
  "Admin",
  "Manager",
  "Ingenieur",
  "Demandeur",
  "Technicien",
  "RespoStock",
];
const serviceRoles = ["ServiceRole1", "ServiceRole2", "ServiceRole3"];
const services = ["Cardiologie", "Radiologie", "ServiceX", "ServiceY"];
const gradeLabels = [
  "Sergent",
  "Sergent-chef",
  "Sergent-major",
  "Adjudant",
  "Adjudant-chef",
  "Lieutenant",
  "Capitaine",
  "Commandant",
  "Lieutenant-colonel",
  "Colonel",
  "Colonel-major",
];

const users = {};
for (let i = 0; i < 15; i++) {
  users[`user--${i}`] = {
    id: `user--${i}`,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number("+212 #########"),
    grade: gradeLabels[generateRandomNumber(gradeLabels.length)],
    service: services[generateRandomNumber(services.length)],
    processRole: processRoles[generateRandomNumber(processRoles.length)],
    serviceRole: serviceRoles[generateRandomNumber(serviceRoles.length)],
  };
}

const testState = {
  records: {},
  selected: "",
};
// console.log(testState.users);
export default testState;

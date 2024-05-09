const Register = artifacts.require("Register");
const medicalRecord = artifacts.require("MedicalRecord");

module.exports = function (deployer) {
  deployer.deploy(medicalRecord, Register.address);
};

const Register = artifacts.require("Register");
const Login = artifacts.require("Login");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(Register);
    await deployer.deploy(Login, Register.address);
    //...
  });
};

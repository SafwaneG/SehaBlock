const prescription = artifacts.require("prescription");

module.exports = function (deployer) {
  deployer.deploy(prescription);
};

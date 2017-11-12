var CrowdFund = artifacts.require("./CrowdFund.sol");
var WalletCompatibleToken = artifacts.require("./WalletCompatibleToken.sol");

module.exports = function(deployer) {
    deployer.deploy(WalletCompatibleToken, "TaxiDriver Token", "TDs", 0, 1000).then(function() {
        return deployer.deploy(CrowdFund, "0x665d12073a9065f06452711dfb6045465e1c3201", 200, 10, 1, WalletCompatibleToken.address);
    });
}


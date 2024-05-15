//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRegister{
    struct userData {
        string name;
        address userAddress;
        bytes32 hashedPassword; // Utilisation de bytes32 pour stocker le hachage du mot de passe
        string userNature;
        string IdentifierN;
    }
    function getUsers(address ad) external  view returns(userData memory);
    function addressExists(address _address) external  view returns (bool) ;
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Iuser{
    struct userData {
        string name;
        address userAddress;
        bytes32 hashedPassword; // Utilisation de bytes32 pour stocker le hachage du mot de passe
        string userNature;
        string IdentifierN;
    }
    function getUsers(address ad) external  view returns(userData memory);
}

contract Login {
    Iuser user;
    constructor(address _registerContract) {
        user = Iuser(_registerContract);
    }

function login(address addressuser, string memory password) public view returns(bool Login1, string memory userNature,string memory errorMessage,string memory username) {
        
        if(user.getUsers(addressuser).userAddress==addressuser &&  user.getUsers(addressuser).hashedPassword == keccak256(abi.encodePacked(password))){
              return (true,user.getUsers(addressuser).userNature,"", user.getUsers(addressuser).name);
        }
        else{
            return (false,"","The address or password are incorrect!","");
        }
         }
}
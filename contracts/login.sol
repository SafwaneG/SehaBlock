// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IRegister.sol";

contract Login {
    IRegister register;
    constructor(address _registerContract) {
        register = IRegister(_registerContract);
    }

function login(address addressuser, string memory password) public view returns(bool isCorrect, string memory userNature,string memory errorMessage,string memory username) {
        
        if(register.getUsers(addressuser).userAddress==addressuser &&  register.getUsers(addressuser).hashedPassword == keccak256(abi.encodePacked(password))){
              return (true,register.getUsers(addressuser).userNature,"", register.getUsers(addressuser).name);
        }
        else{
            return (false,"","The address or password are incorrect!","");
        }
         }
}
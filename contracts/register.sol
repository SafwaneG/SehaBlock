// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Register {

    struct userData {
        string name;
        address userAddress;
        bytes32 hashedPassword; // Utilisation de bytes32 pour stocker le hachage du mot de passe
        string userNature;
        string IdentifierN;
    }
    string[] patientNassurance=["I123ap","I123456ap","L231ap"];
    string[] doctorsLiscences=["I123","I123456","L231"];
    string[] pharmacyPatente=["I123ph","I123456ph","L231ph"];

    mapping(address => userData) public users;

    event UserRegistered(string message, bool isRegistered);
       
     function checkDoctorLicence(string memory doctorLiscence) internal view returns (bool) {
        for (uint i = 0; i < doctorsLiscences.length; i++) {
        if (keccak256(abi.encodePacked(doctorsLiscences[i])) == keccak256(abi.encodePacked(doctorLiscence))) {
            return true; 
        }
    }
    return false; 
}

  function checkPatient(string memory patientAssurane) internal view returns (bool) {
    for (uint i = 0; i < patientNassurance.length; i++) {
        if (keccak256(abi.encodePacked(patientNassurance[i])) == keccak256(abi.encodePacked(patientAssurane))) {
            return true; 
        }
    }
    return false; 
}
 function checkpharmacy(string memory patente) internal view returns (bool) {
    for (uint i = 0; i <pharmacyPatente.length; i++) {
        if (keccak256(abi.encodePacked(pharmacyPatente[i])) == keccak256(abi.encodePacked(patente))) {
            return true; 
        }
    }
    return false; 
}
 
   
function addressExists(address _address) public view returns (bool) {
        return (users[_address].userAddress != address(0));
    }

     
    function registerUser (address ad,string memory _name, string memory _password, string memory _IdentifierN , string memory _userNature) public {
        // Convertir le mot de passe en hachage
     if (addressExists(ad)) {
            emit UserRegistered("Address is already registered!", false);
            return;
        }
     bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
     if (keccak256(abi.encodePacked(_userNature)) == keccak256(abi.encodePacked("patient"))){
          if (checkPatient(_IdentifierN)==true ){
             users[ad] = userData({
            name: _name,
            userAddress:ad,
            hashedPassword: hashedPassword,
            userNature:_userNature,
            IdentifierN: _IdentifierN
        });
        
        emit UserRegistered("Patient registered succussfully", true);
          }  
          else{
          
            emit UserRegistered("There is no Patient with this Inssurance nubmer", false);
            
          }
            
    }
    else if(keccak256(abi.encodePacked(_userNature)) == keccak256(abi.encodePacked("doctor"))){
          if (checkDoctorLicence(_IdentifierN)){
             users[ad] = userData({
            name: _name,
            userAddress:ad,
            hashedPassword: hashedPassword,
            userNature:_userNature,
            IdentifierN: _IdentifierN
        });
        emit UserRegistered("Doctor registered succussfully",true);
          }  
          else{
             emit UserRegistered("There is no Doctor with this Licence nubmer",false);
            
          }
     }
     else if(keccak256(abi.encodePacked(_userNature)) == keccak256(abi.encodePacked("pharmacy"))){
      
          if (checkpharmacy(_IdentifierN)){
             users[ad] = userData({
            name: _name,
            userAddress:ad,
            hashedPassword: hashedPassword,
            userNature:_userNature,
            IdentifierN: _IdentifierN
        });
        emit UserRegistered("pharmacy registered succussfully",true);
          }  
          else{
             emit UserRegistered("There is no pharmacy with this patente nubmer",false);
            
          }
     }
            
    }
    function getUsers(address ad) public view returns(userData memory) {
        return users[ad];
    }
     
}
    

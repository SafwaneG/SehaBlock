// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface Iprescriptions{
    struct MedicationObj {
        uint256 medicationId;
        string medicationName;
        string quantity;
        string dosage;
        bool signedbyPharmacie;
    }
     struct Prescription {
        uint256 id;
        address doctor;
        address patient;
        MedicationObj[] medications; 
        bool signedByDoctor;
        bool signedByPatient;
        bool destroyPrescreption ;    
    }
   function getPrescriptionDetails(address patient) external view returns (Prescription[] memory) ;

}
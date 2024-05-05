// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IPrescription.sol"; 
import "./IRegister.sol";

contract pharmacy{
    Iprescriptions prescriptionMethods;
    IRegister registerFunctions;
constructor(address _addressPrescriptionContract, address _addressRegisterContract){
        prescriptionMethods=Iprescriptions(_addressPrescriptionContract);
        registerFunctions = IRegister(_addressRegisterContract);
}
 event  prescriptionSigned(bool isSignedByPharmacy,string msg) ;
    function signedByPharmacy(address patient , uint256 prescriptionId, uint256 medicationId) public {
       uint256 length= prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].medications.length;
        if( prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].signedByPatient = true){
              for(uint i=0; i<length; i++) {
            if(prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].medications[i].medicationId == medicationId) {
                prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].medications[i].signedbyPharmacie = true;
            }
        
        }
        }

        for(uint i=0; i<length; i++) {
            if(prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].medications[i].signedbyPharmacie == false) {
                prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].destroyPrescreption= false;
                break ;
            }
          prescriptionMethods.getPrescriptionDetails(patient)[prescriptionId].destroyPrescreption = true;
        }
            emit prescriptionSigned(true,"Prescription is signed successefully By pharmacy");
            }
            






}
              
           
    
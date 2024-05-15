// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract prescription{
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

    mapping(address => Prescription[]) public prescriptions;

   
    event PrescriptionSigned(bytes32 prescriptionId, address signer);


    event PrescriptionCreated(bool isCreated , string msg);

    function createPrescription(
    address patient,
    MedicationObj[] memory medications
) external {
    Prescription[] storage patientPrescriptions = prescriptions[patient];

    uint256 prescriptionId = patientPrescriptions.length; // Utilisation de la longueur du tableau comme ID

    Prescription storage newPrescription = patientPrescriptions.push();

    newPrescription.id = prescriptionId;
    newPrescription.doctor = msg.sender;
    newPrescription.patient = patient;
    newPrescription.signedByDoctor = false;
    newPrescription.signedByPatient = false;
    newPrescription.destroyPrescreption=false;


    for (uint256 i = 0; i < medications.length; i++) {
        newPrescription.medications.push(MedicationObj({
            medicationId: i,
            medicationName: medications[i].medicationName,
            quantity: medications[i].quantity,
            dosage: medications[i].dosage,
            signedbyPharmacie:false
        }));
    }
     
        
             prescriptions[patient][prescriptionId].signedByDoctor = true;
              emit  PrescriptionCreated(true, "the prescription is created succefully");


        }
        
    

  

       

  
    event  prescriptionSigned(bool isSignedByPatient,string msg) ;
    function signByPatient(address patient, uint256 prescriptionIndex) external  {
        if(prescriptions[patient][prescriptionIndex].patient==msg.sender)
        prescriptions[patient][prescriptionIndex].signedByPatient = true;
        emit prescriptionSigned(true,"Prescription is signed successefully By patient");
    
    }

  function getPrescriptionDetails(address patient ) external view returns (Prescription[] memory) {
    Prescription[] storage patientPrescriptions = prescriptions[patient];
    return patientPrescriptions;
}
event prescriptionSigned(bool isSignedByPatient,bool isSignedByPhramacy,string msg);



///// signed by pharmacie ///////



function signMedication(address patient , uint256 prescriptionId, uint256 medicationId) public {
       uint256 length= prescriptions[patient][prescriptionId].medications.length;
        if( prescriptions[patient][prescriptionId].signedByPatient = true){
              for(uint i=0; i<length; i++) {
            if(prescriptions[patient][prescriptionId].medications[i].medicationId == medicationId) {
                prescriptions[patient][prescriptionId].medications[i].signedbyPharmacie = true;
                emit prescriptionSigned(true,true,"Medication is signed successefully");
            }
        
        }
        }

        for(uint i=0; i<length; i++) {
            if(prescriptions[patient][prescriptionId].medications[i].signedbyPharmacie == false) {
                prescriptions[patient][prescriptionId].destroyPrescreption= false;
                break ;
            }
           prescriptions[patient][prescriptionId].destroyPrescreption = true;
        }
        }
}
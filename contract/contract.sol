// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User{

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
       
     function checkDoctor(string memory doctorLiscence) internal view returns (bool) {
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
 
   
function addressExists(address _address) internal view returns (bool) {
        return (users[_address].userAddress != address(0));
    }

      function checkpharmacy(string memory patente) internal view returns (bool) {
    for (uint i = 0; i <pharmacyPatente.length; i++) {
        if (keccak256(abi.encodePacked(pharmacyPatente[i])) == keccak256(abi.encodePacked(patente))) {
            return true; 
        }
    }
    return false; 
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
          if (checkDoctor(_IdentifierN)){
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

    function login(address addressuser, string memory password) public view returns(bool Login, string memory userNature,string memory errorMessage,string memory username) {

        if(users[addressuser].userAddress==addressuser &&  users[addressuser].hashedPassword == keccak256(abi.encodePacked(password))){
              return (true,users[addressuser].userNature,"", users[addressuser].name);
        }
        else{
            return (false,"","The address or password are incorrect!","");
        }
         }
         //  **************Medical record form ******************//

            uint public recordId;
            mapping(address => Record[]) public records;
           
           

            mapping(address => address[]) authorisedPatients ;
            mapping(address => address[]) authorisedDoctors ;  // Adresse du médecin autorisé à effectuer certaines modifications    //check doctors in table of authorisedDoctors
            function checkDoctors(address doctorAddress,address patient) internal view returns (bool) {
                for (uint i = 0; i < authorisedDoctors[patient].length; i++) {
                    if (authorisedDoctors[patient][i] == doctorAddress) {
                        return true; 
                    }
                }
                return false; 
            }
        
        //construire le record medical
            struct Record {
                uint recordId;
                address patient;
                uint timestamp;
                string Fname;
                string Lname;
                uint age;
                string N_assurance;
                string date_consultation;
                string diagnostic;
                string resulta_diagnostic;
                string observation_Medicale;
                string treatment;
            }
             

                //  **************Patient ******************//
            

          

        //modifier:
            event authorisedDoctorevent(bool isAdded , string msg);
             function addAuthorisedDoctor(address doctorAddress ) public{
                if(addressExists(doctorAddress)==false){
                      emit authorisedDoctorevent(false, "This doctor is not yet registered");
                     return;
                }
              if(checkDoctors(doctorAddress,msg.sender)){
                emit authorisedDoctorevent(false, "Doctor is already authorised ");
               }
                if(!checkDoctors(doctorAddress,msg.sender)){
                     authorisedDoctors[msg.sender].push(doctorAddress);
                     authorisedPatients[doctorAddress].push(msg.sender); 
                    emit authorisedDoctorevent(true, "Doctor is added  succussfully ");
                }
              
            }
             
            //remove l'authorisation d'un  doctoreur de consulter le dossier medical
        event removedDoctor(bool isRemoved,string msg);
        function removeDoctor(address doctorAddress) public {
           
                 for (uint i = 0; i < authorisedDoctors[msg.sender].length; i++) {
                    if (authorisedDoctors[msg.sender][i] == doctorAddress) {
                    authorisedDoctors[msg.sender][i] = authorisedDoctors[msg.sender][authorisedDoctors[msg.sender].length - 1];
                        authorisedDoctors[msg.sender].pop();
            
                }
                 emit removedDoctor(true,"Doctor is removed succefuly");

            }
               
        }
        event recordCreated(bool isCreated, string  msg);
         function addRecord(
            
                string memory Fname,
                string memory Lname,
                uint age
            ) public  {
                recordId++;
                records[msg.sender].push(
                     Record({
                    recordId: recordId,
                    patient: msg.sender,
                    timestamp: block.timestamp,
                    Fname: Fname,
                    Lname: Lname,
                    age: age,
                    N_assurance:users[msg.sender].IdentifierN,
                    date_consultation: "",
                    diagnostic: "",
                    resulta_diagnostic: "",
                    observation_Medicale: "",
                    treatment: ""
                })
                );
                 emit recordCreated(true, "Record created succussfully");
            }
            function getAllRecord() public view returns(Record[] memory record){
                return records[msg.sender];
            }
            

                //  **************Doctor//

        
           
       
event RecordUpdated(bool isUpdated,string msg);
         //modification d'aprés les medecins
            function updateMedicalInfo(
                address patient,
                string memory diagnostic,
                string memory resulta_diagnostic,
                string memory observation_Medicale,
                string memory date_consultation,
                string memory treatment
            ) public {
                Record storage record = records[patient][records[patient].length-1];
                record.date_consultation = date_consultation;
                record.diagnostic = diagnostic;
                record.resulta_diagnostic = resulta_diagnostic;
                record.observation_Medicale = observation_Medicale;
                record.treatment = treatment;
                emit RecordUpdated(true,"Record updated successflly");
                
            }
            function getPatientAuthorised() internal  view returns(address[] memory) {
                       return authorisedPatients[msg.sender];
                       
            }
            function getPatientRecord(address patient) public view returns (Record[] memory){
                require(checkDoctors(msg.sender,patient), "you are not authorized");
                     return  records[patient];
            }
                    struct UserInfo {
                    address doctorAddress;
                    string name;
}


            function getPatientAuthorisedInfo() public view returns (UserInfo[] memory) {
                address[] memory patientAddresses = getPatientAuthorised();
               UserInfo[] memory patients = new UserInfo[](patientAddresses.length);

                for (uint i = 0; i < patientAddresses.length; i++) {
                    (address addr, string memory name) = getUserInfo(patientAddresses[i]);
                    patients[i] =UserInfo(addr, name);
                }

                return patients;
            }



             function getDoctorAuthorisedInfo() public view returns (UserInfo[] memory) {
                address[] memory doctorAddresses = getDoctorAuthorised();
                UserInfo[] memory doctors = new UserInfo[](doctorAddresses.length);

                for (uint i = 0; i < doctorAddresses.length; i++) {
                    (address addr, string memory name) = getUserInfo(doctorAddresses[i]);
                    doctors[i] = UserInfo(addr, name);
                }

                return doctors;
            }

            function getUserInfo(address _userAddress) public view returns (address ,string memory ) {
                  require(addressExists(_userAddress),"there is no user with this address");
                return(users[_userAddress].userAddress ,users[_userAddress].name );
    }
         function getDoctorAuthorised() internal  view returns(address[] memory) {
                       return authorisedDoctors[msg.sender];
            }
            
         

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
        
    

  

       

  
    event prescriptionSigned(bool isSignedByPatient,bool isSignedByPhramacy,string msg);
    function signByPatient(address patient, uint256 prescriptionIndex) external  {
        if(prescriptions[patient][prescriptionIndex].patient==msg.sender)
        prescriptions[patient][prescriptionIndex].signedByPatient = true;
        emit prescriptionSigned(true,false,"Prescription is signed successefully By patient");
    
    }

  function getPrescriptionDetails(address patient) external view returns (Prescription[] memory) {
    Prescription[] storage patientPrescriptions = prescriptions[patient];

    return patientPrescriptions;
}


    //         //  **************pharmacie//
              
           
    
    function signedByPharmacy(address patient , uint256 prescriptionId, uint256 medicationId) public {
       uint256 length= prescriptions[patient][prescriptionId].medications.length;
        if( prescriptions[patient][prescriptionId].signedByPatient = true){
              for(uint i=0; i<length; i++) {
            if(prescriptions[patient][prescriptionId].medications[i].medicationId == medicationId) {
                prescriptions[patient][prescriptionId].medications[i].signedbyPharmacie = true;
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
            emit prescriptionSigned(true,true,"Prescription is signed successefully By pharmacy");
            }
            
}
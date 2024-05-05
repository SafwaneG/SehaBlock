  // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IRegister.sol";

contract MedicalRecord {
    IRegister registerFunctions;
    constructor(address _registerContractAddress) {
        registerFunctions=IRegister(_registerContractAddress);
    }
   uint public recordId;
            mapping(address => Record[]) public records;

            mapping(address => address[]) authorisedPatients ;
            mapping(address => address[]) authorisedDoctors ;  

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
             
            function checkDoctorAuthorization(address doctorAddress,address patient) internal view returns (bool) {
                for (uint i = 0; i < authorisedDoctors[patient].length; i++) {
                    if (authorisedDoctors[patient][i] == doctorAddress) {
                        return true; 
                    }
                }
                return false; 
            }
        

                //  **************Patient ******************//
            

          

        
            event authorisedDoctorevent(bool isAdded , string msg);
             function addAuthorisedDoctor(address doctorAddress ) public  {

              if(registerFunctions.addressExists(doctorAddress)==false){
                      emit authorisedDoctorevent(false, "This doctor is not yet registered");
                     return;
                }
              if(checkDoctorAuthorization(doctorAddress,msg.sender)){
                emit authorisedDoctorevent(false, "Doctor is already authorised ");
               }
                if(!checkDoctorAuthorization(doctorAddress,msg.sender)){
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
                    N_assurance:registerFunctions.getUsers(msg.sender).IdentifierN,
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
                require(checkDoctorAuthorization(msg.sender,patient), "you are not authorized");
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
                  require(registerFunctions.addressExists(_userAddress),"there is no user with this address");
                return(registerFunctions.getUsers(_userAddress).userAddress ,registerFunctions.getUsers(_userAddress).name );
    }
         function getDoctorAuthorised() internal  view returns(address[] memory) {
                       return authorisedDoctors[msg.sender];
            }
            
         
}
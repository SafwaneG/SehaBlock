export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "doctor",
        type: "address",
      },
    ],
    name: "PrescriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "prescriptionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "PrescriptionSigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isAdded",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "authorisedDoctorevent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isCreated",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "recordCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "addAuthorisedDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "Fname",
        type: "string",
      },
      {
        internalType: "string",
        name: "Lname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "addRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "medicationId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "medicationName",
            type: "string",
          },
          {
            internalType: "string",
            name: "quantity",
            type: "string",
          },
          {
            internalType: "string",
            name: "dosage",
            type: "string",
          },
          {
            internalType: "bool",
            name: "signedbyPharmacie",
            type: "bool",
          },
        ],
        internalType: "struct User.MedicationObj[]",
        name: "medications",
        type: "tuple[]",
      },
    ],
    name: "createPrescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRecord",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "recordId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "patient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "Fname",
            type: "string",
          },
          {
            internalType: "string",
            name: "Lname",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "N_assurance",
            type: "string",
          },
          {
            internalType: "string",
            name: "date_consultation",
            type: "string",
          },
          {
            internalType: "string",
            name: "diagnostic",
            type: "string",
          },
          {
            internalType: "string",
            name: "resulta_diagnostic",
            type: "string",
          },
          {
            internalType: "string",
            name: "observation_Medicale",
            type: "string",
          },
          {
            internalType: "string",
            name: "treatment",
            type: "string",
          },
        ],
        internalType: "struct User.Record[]",
        name: "record",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDoctorAuthorised",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPatientAuthorised",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
    ],
    name: "getPatientRecord",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "recordId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "patient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "Fname",
            type: "string",
          },
          {
            internalType: "string",
            name: "Lname",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "N_assurance",
            type: "string",
          },
          {
            internalType: "string",
            name: "date_consultation",
            type: "string",
          },
          {
            internalType: "string",
            name: "diagnostic",
            type: "string",
          },
          {
            internalType: "string",
            name: "resulta_diagnostic",
            type: "string",
          },
          {
            internalType: "string",
            name: "observation_Medicale",
            type: "string",
          },
          {
            internalType: "string",
            name: "treatment",
            type: "string",
          },
        ],
        internalType: "struct User.Record[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
    ],
    name: "getPrescriptionDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "doctor",
            type: "address",
          },
          {
            internalType: "address",
            name: "patient",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "medicationId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "medicationName",
                type: "string",
              },
              {
                internalType: "string",
                name: "quantity",
                type: "string",
              },
              {
                internalType: "string",
                name: "dosage",
                type: "string",
              },
              {
                internalType: "bool",
                name: "signedbyPharmacie",
                type: "bool",
              },
            ],
            internalType: "struct User.MedicationObj[]",
            name: "medications",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "signedByDoctor",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "signedByPatient",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "destroyPrescreption",
            type: "bool",
          },
        ],
        internalType: "struct User.Prescription[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressuser",
        type: "address",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "login",
    outputs: [
      {
        internalType: "bool",
        name: "Login",
        type: "bool",
      },
      {
        internalType: "string",
        name: "userNature",
        type: "string",
      },
      {
        internalType: "string",
        name: "errorMessage",
        type: "string",
      },
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prescriptions",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "doctor",
        type: "address",
      },
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "signedByDoctor",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "signedByPatient",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "destroyPrescreption",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recordId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "records",
    outputs: [
      {
        internalType: "uint256",
        name: "recordId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "Fname",
        type: "string",
      },
      {
        internalType: "string",
        name: "Lname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "N_assurance",
        type: "string",
      },
      {
        internalType: "string",
        name: "date_consultation",
        type: "string",
      },
      {
        internalType: "string",
        name: "diagnostic",
        type: "string",
      },
      {
        internalType: "string",
        name: "resulta_diagnostic",
        type: "string",
      },
      {
        internalType: "string",
        name: "observation_Medicale",
        type: "string",
      },
      {
        internalType: "string",
        name: "treatment",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ad",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
      {
        internalType: "string",
        name: "_IdentifierN",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userNature",
        type: "string",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "removeDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prescriptionIndex",
        type: "uint256",
      },
    ],
    name: "signByDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prescriptionIndex",
        type: "uint256",
      },
    ],
    name: "signByPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "prescriptionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "medicationId",
        type: "uint256",
      },
    ],
    name: "signedByPharmacy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        internalType: "string",
        name: "diagnostic",
        type: "string",
      },
      {
        internalType: "string",
        name: "resulta_diagnostic",
        type: "string",
      },
      {
        internalType: "string",
        name: "observation_Medicale",
        type: "string",
      },
      {
        internalType: "string",
        name: "date_consultation",
        type: "string",
      },
      {
        internalType: "string",
        name: "treatment",
        type: "string",
      },
    ],
    name: "updateMedicalInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hashedPassword",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "userNature",
        type: "string",
      },
      {
        internalType: "string",
        name: "IdentifierN",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

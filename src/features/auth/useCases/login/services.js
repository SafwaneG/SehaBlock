import Web3 from "web3";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "store/errors/actions";
import loadingActions from "store/loading/actions";
import { abi } from "config/contractAbi";
import contractAddress from "config/contractAddress";
import authActions from "features/auth/actions";
import helpers from "helpers";
export default function useLogin() {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(false);
  const [formData, setFormData] = useState({ publicKey: "", password: "" });
  const [accountAddress, setAccountAddress] = useState("");
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isError, setIsError] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const web3 = new Web3(window.ethereum);

  useEffect(() => {
    async function fetchAddress() {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setFormData({ ...formData, publicKey: accounts[0] });
    }
    fetchAddress();
  }, []);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      provider = "You should install MetaMask!";
    }
    return provider;
  };

  const onConnect = async () => {
    const provider = detectCurrentProvider();
    if (provider === "You should install MetaMask!") {
      setIsError({ show: true, message: provider, isError: true });
      return;
    }
    try {
      await provider.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log(account);
      console.log(web3.eth.Contract);
      test(account);
      setIsConnected(true);
      // navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  const disconnect = () => {
    setIsConnected(false);
  };

  const contract = new web3.eth.Contract(abi, contractAddress.address);

  const navigateUser = (userNature) => {
    if (userNature === "patient") navigate("/dashboard/medicalRecord");
    else if (userNature === "doctor") navigate("/dashboard/patients");
    else if (userNature === "pharmacy") navigate("/dashboard/pharmacy");
  };

  const onSubmit = async () => {
    dispatch(loadingActions.updated({ value: true }));
    const result = await contract.methods
      .login(formData.publicKey, formData.password)
      .call();
    dispatch(loadingActions.updated({ value: false }));
    console.log(result);
    if (result.Login) {
      dispatch(authActions.userSet({ user: result }));
      helpers.persister.set({ key: "user", value: JSON.stringify(result) });
      navigateUser(result.userNature);
    } else {
      dispatch(
        actions.updated({
          show: true,
          message: result.errorMessage,
          isSuccess: false,
        })
      );
      setIsError({ show: true, message: result.errorMessage, isError: false });
    }
  };

  const handleClose = () => {
    setIsSignUpOpen(false);
  };
  const handleSignUpOpen = async () => {
    setIsSignUpOpen(true);
    const provider = detectCurrentProvider();
    if (provider === "You should install MetaMask!") {
      return;
    }
    try {
      await provider.request({ method: "eth_requestAccounts" });
      // const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();

      console.log(accounts);
      const account = accounts[0];

      setAccountAddress(account);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    onConnect,
    isConnected,
    disconnect,
    onChange,
    onSubmit,
    isError,
    formData,
    isSignUpOpen,
    handleClose,
    handleSignUpOpen,
    accountAddress,
  };
}

import { useState, useEffect } from "react";
import Web3 from "web3";
import { useDispatch } from "react-redux";
import actions from "store/errors/actions";
import loadingActions from "store/loading/actions";
import Register from "contracts/Register.json";
export default function useSignUp() {
  const dispatch = useDispatch();
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(
    Register.abi,
    Register.networks[1337].address
  );

  const [userNature, setUserNature] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    identifier: "",
  });
  const [isError, setIsError] = useState({
    show: false,
    message: "",
    isError: false,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserNatureChange = (e) => {
    setUserNature(e.target.value);
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

  const onSignUp = async () => {
    const provider = detectCurrentProvider();
    if (provider === "You should install MetaMask!") {
      return;
    }
    try {
      await provider.request({ method: "eth_requestAccounts" });
      // const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      console.log("jj", accounts);
      const account = accounts[0];

      setAccountAddress(account);
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async () => {
    dispatch(loadingActions.updated({ value: true }));

    try {
      // const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const result = await contract.methods
        .registerUser(
          account,
          formData.name,
          formData.password,
          formData.identifier,
          userNature
        )
        .send({ from: account });

      dispatch(loadingActions.updated({ value: false }));
      console.log(result);

      const event = result.events.UserRegistered.returnValues;
      dispatch(
        actions.updated({
          isSuccess: event.isRegistered,
          message: event.message,
          show: true,
        })
      );
      setAccountAddress(account);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    userNature,
    handleUserNatureChange,
    onSignUp,
    accountAddress,
    onChange,
    submit,
    isError,
  };
}

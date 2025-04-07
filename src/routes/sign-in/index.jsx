import { signInWithGooglePopup } from "../../utils/firebase/firebaseUtils";
const SignIn = () => {
  const logInUser = async () => {
    console.log('button clicked');
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
      <h1>welcome to sign-in page</h1>
      <button onClick={logInUser}>Login Using Your Google Account</button>
    </>
  );
};

export default SignIn;

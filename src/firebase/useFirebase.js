import { getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../components/redux/user/userSlice";
import { firebaseInitialize } from "./firebase.config";

firebaseInitialize()

const provider = new GoogleAuthProvider();

export const useGoogleSignIn = () => {
    const dispatch = useDispatch()
    const auth = getAuth();

    const googleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                dispatch(login(user))
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const logOut =()=>{
        signOut(auth).then(() => {
            dispatch(logout())
          }).catch((error) => {
            // An error happened.
          });
    }

    return {googleLogin,logOut}
}
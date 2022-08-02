import React from "react";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up/sign-up.component";
import { signInWithGooglePopup,
        auth,
      createUserDocumentFromAuth,
     } from '../../utils/firebase/firebase.utils';


const SignIn =() => {

    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign-In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
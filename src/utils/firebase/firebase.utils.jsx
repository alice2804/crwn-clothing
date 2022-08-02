// @ts-ignore
import {FirebaseError, initializeApp } from 'firebase/app';
// @ts-ignore
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from  'firebase/firestore'
import SignIn from '../../routes/sign-in/sign-in.componnt';

const firebaseConfig = {
    apiKey: "AIzaSyBRACf1foBFoFGDF6_YZ4MsDebxoxi1BPQ",
    authDomain: "crwn-clothing-db-b21b3.firebaseapp.com",
    projectId: "crwn-clothing-db-b21b3",
    storageBucket: "crwn-clothing-db-b21b3.appspot.com",
    messagingSenderId: "858621813475",
    appId: "1:858621813475:web:5156e4d70c19007b601bd6"
  };
  
  // Initialize Firebase
  // @ts-ignore
  const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: 'select_account'
});
  export const auth =getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => 
signInWithRedirect(auth, provider);
  export const db = getFirestore();

 export const createUserDocumentFromAuth = async(userAuth, additionalInformation ={}
 ) =>{
  if(!userAuth) return;
   // @ts-ignore
   const  userDoRef = doc(db, 'users', userAuth.uid);

   // @ts-ignore
   const  userSnapshot = await getDoc(userDoRef); 
  

   if(!userSnapshot.exists()){
    // @ts-ignore
    const {displayName, email } = userAuth;
    // @ts-ignore
    const createdAt = new Date();

    try {
        // @ts-ignore
        await setDoc(userDoRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    } catch (error) {
        console.log('error creating the user', error.message);

    }
   // @ts-ignore
}
// @ts-ignore
return  userDoRef;
 };

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

 return await createUserWithEmailAndPassword(auth, email, password);

 };

 export default SignIn;
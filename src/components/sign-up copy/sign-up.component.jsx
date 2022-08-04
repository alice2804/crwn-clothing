import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import '../sign-in/sign-in-form.styles.scss';
import SignInForm from "../sign-in-form/sign-in.component";

const defaultformFields ={
    
    email:'',
    password:'',
   
};

const SignUpForm = () => {
    const  [formFields, setFormField] = useState(defaultformFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields = ()=>{
        setFormField(defaultformFields);
    }

    const handleSubmit = async(event) => {
     event.preventDefault(); 

     if(password != confirmPassword){
        alert("password do not match");
        return;
     } 
     try{
    
     resetFormFields();
     } catch(error){
        if(error.code = 'auth/email-already-in-use'){
                alert('Cannot create User, Email Already in use');
            } else{
     console.log('user creation encountered an error',error);
            }
     }
    };


    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormField({...formFields, [name]: value});
    };
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with Your Email and Password</span>
            <form onSubmit={handleSubmit}>

              
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>

                <FormInput label={"password"} type="password" required onChange={handleChange} name='password'  value={password}/>


                <Button type="submit">Sign In</Button>
               
               
            </form>
        </div>
    );
};

export default SignInForm;
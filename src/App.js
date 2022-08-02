import React from 'react';
// @ts-ignore
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/home/navigation/navigation.component';
import Home from './routes/home/home.component'
// @ts-ignore
import SignIn from './routes/sign-in/sign-in.componnt';


const Shop = ()=> {
return <h1>I am the shop page</h1>;
};

const App = () => {

  return(
    <Routes>
      <Route path='/'element = {<Navigation/>}> 
      <Route index element={<Home/>}/>
      <Route path='Shop' element = { <Shop/>}/>
      <Route path='SignIn' element = { <SignIn/>}/>
      </Route>
    </Routes>
  );
 };

export default App;

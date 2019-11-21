import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {





  return (

  	<BrowserRouter>

		<div className="grid">

		  <Header />
		  <Navbar />
		  <div className='grid-content'>
		  	{/*<Route path='/dialogs' component={Dialogs} />  
		  			  	<Route path='/profile' component={Profile} />*/}
		  	{/*<Profile />*/}
		  	{/*<Dialogs />* Route package installed with npm i react-router-dom -save */}
		  	<Route path='/dialogs' render={() => <DialogsContainer store={props.store} /> } />
		  	<Route path='/profile' render={() => <Profile store={props.store} /> } />
		  </div>

		</div>

	</BrowserRouter>

  );
};


export default App;

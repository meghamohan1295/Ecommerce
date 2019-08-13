import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Store from './components/Cart/Store';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Productlist}></Route>
        <Route path='/carts' component={Store}></Route>
        <Route path='/details' component={Details}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;

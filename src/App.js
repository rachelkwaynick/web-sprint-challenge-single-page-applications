import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PizzaForm from './components/PizzaForm';
import Help from './components/Help';
import Home from './components/Home';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
  }
`

const initalFormValues = {
  name: '',
  //Dropdown
  size: '',
  //Radio
  sauce: '',
  //Checkboxes
  pepperoni: false,
  sausage: false,
  canadian: false,
  spicySausage: false,
  //Textbox
  special: '',
}

const initalFormErrors = {
  name: '',
  size: '', 
  sauce: '', 
}

const initialDisabled = true;



const App = () => {
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  return (
    <>
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
        </nav>
      </StyledHeader>

      <Switch>
        <Route path={'/pizza'}>
          <PizzaForm />
        </Route>
        <Route path={'/help'}>
          <Help />
        </Route>
        <Route>
          <Home path={'/'}/>
        </Route>
      </Switch>
    </>
  );
};
export default App;

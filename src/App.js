import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from 'axios';

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

const initialPizzas = [];
const initialDisabled = true;



const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getPizzas = () => {
    axios
      .get(`https://reqres.in/api/pizza`)
      .then((res) => {
        setPizzas(res.data.data);
        console.log('get', res.data.data)
      })
      .catch((err) => {
        alert('Error!')
      })
  }

  const postPizza = (newPizza) => {
    axios 
      .post(`https://reqres.in/api/pizza`, newPizza)
      .then((res) => {
        setPizzas([res.data, ...pizzas]);
        setFormValues(initalFormValues);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'canadian', 'spicySausauge'].filter(
        (topping) => formValues[topping]
      ),
      special: formValues.special.trim(),
    };

    postPizza(newPizza);
  }

  useEffect(() => {
    getPizzas();
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues])

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
        {/* <Route path={'/pizza'}>
          <PizzaForm />
        </Route> */}
        <Route path={'/help'}>
          <Help />
        </Route>
        <Route path={'/'}>
          <Home
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;

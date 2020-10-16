import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import PizzaForm from './PizzaForm';



export default function Home(props) {

    
    return (
        <div>
            <div className='background-img'>
                <h1>Your favorite food, delivered while coding</h1>
                <Link to='/pizza'>Pizza?</Link>
            </div>
             


            <Route path={'/pizza'}>
                <PizzaForm />
            </Route>
        </div>


        
    )
}
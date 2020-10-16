import React from 'react';


export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;





    return (
        <form>
            <h1>Build Your Own Pizza</h1>

            <img src='../../Assets/Pizza.jpg'/>

            <h2>Build Your Own Pizza</h2>

            <label>
                Choice of Size
                <span>Required</span>

            </label>
        </form>
    )
}
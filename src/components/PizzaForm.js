import React from 'react';


export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;

        change(name, valueToUse)
    }


    return (
        <form onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>

            <img src='../../Assets/Pizza.jpg'/>

            <h2>Build Your Own Pizza</h2>

            <label>
                Name: 
                <span>Required</span>
                <div>{errors.name}</div>
                <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </label>
            
            <label>
                <h3>Choice of Size</h3>
                <span>Required</span>
                <div>{errors.size}</div>

                <select onChange={onChange} value={values.size} name='size'>
                    <option value=''>--Select a Size--</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div className='sauce'>
                <h3>Choice of Sauce</h3>
                <span>Required</span>
                <div>{errors.sauce}</div>
                <label>
                    Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='originalRed'
                        checked={values.sauce === 'originalRed'}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlicRanch'
                        checked={values.sauce === 'garlicRanch'}
                        onChange={onChange}
                    />
                </label>

                <label>
                    BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq'
                        checked={values.sauce === 'bbq'}
                        onChange={onChange}
                    />
                </label>
                
                <label>
                    Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinachAlfredo'
                        checked={values.sauce === 'spinachAlfredo'}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className='toppings'>
                <h3>Toppings</h3>
                <span>Required</span>

                <label>
                    Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Canadian Bacon
                    <input
                        type='checkbox'
                        name='canadian'
                        checked={values.canadian}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Spicy Italian Sausauge
                    <input
                        type='checkbox'
                        name='spicySausage'
                        checked={values.spicySausage}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div className='special'>

                <label>
                    <h3>Special Instructions</h3>

                    <textarea
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        placeholder='Anything else you would like to add?'
                    />
                </label>
            </div>


            <button disabled={disabled}>Add to Order</button>
        </form>
    )
}
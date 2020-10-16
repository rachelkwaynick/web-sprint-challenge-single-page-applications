import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be 2 characters'),
    size: yup   
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),
    sauce: yup
        .string()
        .oneOf(['originalRed', 'garlicRanch', 'bbq', 'spinachAlfredo'], 'Sauce is Required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    spicySausage: yup.boolean(),
    special: yup.string(),
})
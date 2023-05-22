import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Fieldset = ({ name, label, ...rest }) => (
    <div className="form-group">
        <label className='label.cus-label' htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} className='text-danger small' component='div' />
    </div>
);

export default Fieldset;
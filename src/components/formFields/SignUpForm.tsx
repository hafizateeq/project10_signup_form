import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormFields } from './FormFields';
import './FormField.css';
import Button from '@material-ui/core/Button';

interface formValues {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
const initialValues: formValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}
const registerSchema = yup.object().shape({
  firstName: yup.string()
    .min(3, "must be 3 character or more")
    .required("This field is required"),
  lastName: yup.string()
    .min(3, "must be 3 character or more")
    .required("This field is required"),
  email: yup.string()
    .email('Invalid email address')
    .required('Email is Required'),
  password: yup.string()
    .min(6, 'Password is too short.')
    .max(20, 'Password is too long.')
    .required('Password is required.')
})

export const SignUpForm = () => {

  const forSubmit = (values: formValues): void => {
    console.log(JSON.stringify(values));
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={forSubmit}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <FormFields label="First Name" firstName="firstName" lastName="lastName" email="email" password="password" />
              </div>
              <Button disabled={!dirty || !isValid} type="submit"
                fullWidth
                variant="contained"
                color='primary'
                className="submitButton">
                SIGN UP
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

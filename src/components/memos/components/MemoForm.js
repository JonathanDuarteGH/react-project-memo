import React from 'react';
import { Formik, Form, Field } from "formik";
import { makeStyles } from '@material-ui/core';
import { MemoField } from './MemoField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}))

const MemoForm = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ companyName: '', email: '', password: '' }}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = '*Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = '*Invalid email address';
        }

        if (!values.password) {
          errors.password = '*Required';
        } else if (values.password.length < 8) {
          errors.password = '*Must be greater than 8 characters';
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({
        values, errors, touched
      }) => (
          <Form>
            <div>
              <Field
                name='companyName'
                placeholder='Company Name'
                component={MemoField}
                value={values.companyName}
              />
            </div>
            <div>
              <Field
                type='email'
                name='email'
                placeholder='Email'
                component={MemoField}
                value={values.email}
              />
              <div>
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div>
              <Field
                name='password'
                placeholder='Password'
                component={MemoField}
                value={values.password}
              />
              <div>
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={((values.companyName && values.email).length === 0) || (values.password).length < 8}
              className={classes.margin}
            >
              Submit
            </Button>
          </Form>
        )}
    </Formik>
  );
};

export default MemoForm;
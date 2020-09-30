import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  render() {
    return (
      <form>
      <fieldset>
        <label>Email</label>
        <Field name='email' type="text" autoComplete="none" component="input" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field name='password' type="password" autoComplete="none" component="input" />
      </fieldset>
      </form>
    )
  }
}

export default reduxForm({form: 'signup'})(Signup);

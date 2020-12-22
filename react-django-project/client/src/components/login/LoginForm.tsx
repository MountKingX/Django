import React from 'react';
import { Button, Form } from 'react-bootstrap';

type LoginFormProps = { };

type LoginFormState = {
  username: string;
  password: string;
  formError: string | null;
};

const INIT_STATE: LoginFormState = {
  username: '',
  password: '',
  formError: null,
};

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

  state = { ...INIT_STATE };

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
  _handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target);
    const { name, value } = event.target;
    const newState = { ...this.state };
    newState[name as keyof LoginFormState] = value;
    this.setState(newState);
  };

  _setFormErrorMessage(errorMessage: string) {
    this.setState((prevState) => {
      return {
        ...prevState,
        formError: errorMessage,
      };
    });
  }

  _handleFormSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    const { username, password, formError } = this.state;
    return (
      <React.Fragment>
        <div className="login-error">
          {
            formError && (
              <section className="">
                <div className="text-center alert alert-danger alert-dismissible">
                  <button className="close" type="button"
                          onClick={() => this._setFormErrorMessage('')}>
                    <span>&times;</span>
                  </button>
                  <i className="alert">
                    {formError}
                  </i>
                </div>
              </section>)
          }
        </div>
        <Form>
          <Form.Group controlId="formInputUsername">
            <Form.Label>Username or Email address</Form.Label>
            <Form.Control type="text"
                          name="username"
                          onChange={this._handleInputChange}
                          value={username}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formInputPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          name="password"
                          onChange={this._handleInputChange}
                          value={password}/>
          </Form.Group>

          <Form.Group controlId="formRememberMeCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>

          <Button variant="primary"
                  type="submit"
                  onClick={this._handleFormSubmit}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

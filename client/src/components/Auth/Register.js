import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import "../../styles/Register.css";

// actions
import { registerUser } from "../../Actions/User/UserAction";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      password2: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = (e, { value, name }) => this.setState({ [name]: value });

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.registerSuccess) {
    }
  };

  render() {
    const errors = this.props.registerErrors;
    return (
      <div className="formInput">
        <h2>Create Account</h2>
        {errors.name ? <div className="error">{errors.name}</div> : null}
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            className="formInput"
            placeholder="Name"
            name="fullname"
            value={this.state.fullname}
            onChange={this.onChange}
            error={Boolean(errors.name)}
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
          <Form.Input
            className="formInput"
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={Boolean(errors.email)}
          />
          {errors.gradeLevel ? (
            <div className="error">{errors.gradeLevel}</div>
          ) : null}
          
          {errors.password ? <div className="error">{errors.password}</div> : null}
          <Form.Input
            className="formInput"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={Boolean(errors.password)}
          />
          {errors.password2 ? (
            <div className="error">{errors.password2}</div>
          ) : null}
          <Form.Input
            className="formInput"
            placeholder="Confirm password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={Boolean(errors.password2)}
          />
          <div>
            <Form.Field
              className="formInput"
              control={Button}
              fluid={true}
              content="Register"
              color="green"
            />
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerErrors: state.userReducer.registerErrors
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);

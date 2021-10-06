import React from "react";

export function LoginForm(props: { handleLoginSubmit: any }) {
  return (
    <form onSubmit={props.handleLoginSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Please enter your username"
        className="login-field form-control"
      />
      <br />

      <input
        type="text"
        name="phone_number"
        placeholder="Please enter your email"
        className="login-field form-control"
      />
      <br />
      <input type="submit" className="btn btn-primary" id="login-button" />
    </form>
  );
}

export function Register() {
  return <LoginForm handleLoginSubmit={console.log} />;
}

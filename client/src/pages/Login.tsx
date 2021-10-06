import React from "react";

export function LoginForm(props: { handleLoginSubmit: any }) {
  return (
    <form onSubmit={props.handleLoginSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Please enter your full name"
        className="login-field form-control"
      />
      <br />

      <input
        type="text"
        name="phone_number"
        placeholder="Please enter your phone number"
        className="login-field form-control"
      />
      <br />
      <input type="submit" name="submit" className="submit" id="login-button" />
    </form>
  );
}

export function Login() {
  return <LoginForm handleLoginSubmit={console.log} />;
}

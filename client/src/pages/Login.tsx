import React from "react";

export function LoginForm(props: { handleLoginSubmit: any }) {
  return (
    <form onSubmit={props.handleLoginSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Enter your username"
        className="login-field form-control"
      />
      <br />

      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        className="login-field form-control"
      />
      <br />
      <input type="submit" className="btn btn-primary" id="login-button" />
    </form>
  );
}

export function Login() {
  return <LoginForm handleLoginSubmit={console.log} />;
}

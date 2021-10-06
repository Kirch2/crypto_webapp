import React from "react";

export function ResetUserForm(props: { handleLoginSubmit: any }) {
  return (
    <form onSubmit={props.handleLoginSubmit}>
      <h1>Reset Password</h1>
      <input
        type="text"
        placeholder="Please enter your email"
        className="login-field form-control"
      />
      <br />
      <input type="submit" className="btn btn-primary" id="login-button" />
    </form>
  );
}

export function ResetUser() {
  return <ResetUserForm handleLoginSubmit={console.log} />;
}

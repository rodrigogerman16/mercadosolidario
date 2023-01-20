import React from "react";
import ReactDOM from "react-dom";
// import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from "react-google-login";

const Google = () => {
  const responseGoogle = () => {
  };

  return (
    <GoogleLogin
      clientId="83937004907-369gq7o4ocbnfb4u9v9md1dgg197uc2g.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default Google;

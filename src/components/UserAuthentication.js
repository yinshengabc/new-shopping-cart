import React from "react";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import { Button } from "reactstrap";
import { Message } from "rbx";

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const UserAuthentication = ({ user }) => (
  <React.Fragment>{user ? <Welcome user={user} /> : <SignIn />}</React.Fragment>
);

const Welcome = ({ user }) => (
  <Message.Header style={{ float: "right" }}>
    <b>Welcome,</b> <br />
    {user.displayName}
    <br />
    <Button size="sm" primary onClick={() => firebase.auth().signOut()}>
      Log out
    </Button>
  </Message.Header>
);

const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);

export default UserAuthentication;

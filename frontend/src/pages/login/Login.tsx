import CognitoSignInForm from '../../components/authentication/SignInForm'

export default function SignInPage () {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p >Please sign in to continue</p>
      <CognitoSignInForm /> 
    </div>
  );
};

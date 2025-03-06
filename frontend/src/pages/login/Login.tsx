import './Login.css'
import CognitoSignInForm from '../../components/authentication/CognitoSignInForm'
import GitHubLoginButton from '../../components/authentication/GitHubLoginButton';

export default function SignInPage () {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p >Please sign in to continue</p>
      <CognitoSignInForm /> 
      <p>
        <GitHubLoginButton />
      </p>
    </div>
  );
};

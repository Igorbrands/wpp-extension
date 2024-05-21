import {
	withErrorBoundary,
	withSuspense
} from '@chrome-extension-boilerplate/shared';
import { GoogleLogin } from '@react-oauth/google';
import '@src/Popup.css';

const Popup = () => {

  return (
    <div
      className="App">
      <header className="App-header">
        <h1>Google Account</h1>


<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);

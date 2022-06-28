import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
        <h1>Hello1 {user.username}</h1>
        <h1>Environment: {process.env.NODE_ENV}</h1>

        {/*
        <h2>Example.com - Employee Portal</h2>
        <h3>Current shipment stats</h3>
            <iframe
            width="960"
            height="720"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/306802105982/dashboards/f4d6ae71-0e57-471b-877a-8f598785a670?directory_alias=senthil-quicksight-account1">
        </iframe>
       */}

      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
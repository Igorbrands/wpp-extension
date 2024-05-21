
import { gapi } from 'gapi-script';

const CLIENT_ID = '71195438593-76djr499libetn4c2qi5gh5hcbfdipic.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCPXqK_c9FkZE6cWfPQDziaZC40S4rs7fc';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/people/v1/rest'];
const SCOPES = 'https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/contacts.readonly';

export const initClient = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        resolve(gapi);
      }).catch((error: unknown) => {
        reject(error);
      });
    });
  });
};

export const signIn = () => {
  return gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
  return gapi.auth2.getAuthInstance().signOut();
};

export const isSignedIn = () => {
  return gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const listContacts = () => {
  return gapi.client.people.people.connections.list({
    resourceName: 'people/me',
    pageSize: 10,
    personFields: 'names,emailAddresses',
  });
};

import { app } from 'firebase';

interface IApplicationConfig {
  firebase: app.App;
  firebaseConfig: any;
  businessId: string;
}


export default IApplicationConfig;

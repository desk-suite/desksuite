import _Vue from 'vue';
import ApplicationConfig from './applicationConfig';
import { State } from './store';

export class DeskSuite {
  
  constructor(appConfig: any)
  {    
    // appConfig.firebase = firebase.initializeApp(appConfig.firebaseConfig);
    // this.Modules = new Modules(appConfig);
    new State(appConfig.store)
  }
}

export default function (Vue: typeof _Vue, options?: any): void {
 
    const deskSuite = new DeskSuite(options);
    Vue.prototype.$DeskSuite = deskSuite;
}

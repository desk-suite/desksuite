import firebase = require( "firebase/app" );
import _Vue from 'vue';
import ApplicationConfig from './applicationConfig';
import Modules from './modules';

export class DeskSuite {
  public Modules: Modules;
  
  constructor(appConfig: ApplicationConfig)
  {    
    appConfig.firebase = firebase.initializeApp(appConfig.firebaseConfig);
    this.Modules = new Modules(appConfig);
  }
}

export default function (Vue: typeof _Vue, options?: any): void {
 
    const deskSuite = new DeskSuite(options);
    Vue.prototype.$DeskSuite = deskSuite;
}

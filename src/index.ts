import firebase = require( "firebase/app" );
import _Vue from 'vue';
import Modules from './modules';

export class DeskSuite {
  public Modules: Modules;
  
  constructor(app: firebase.app.App)
  {
    this.Modules = new Modules(app);
  }
}

export default function (Vue: typeof _Vue, options?: any): void {
 
    const firebaseApp = firebase.initializeApp(options.config);
    const deskSuite = new DeskSuite(firebaseApp);
    Vue.prototype.$DeskSuite = deskSuite;
}

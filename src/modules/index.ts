import { app } from 'firebase';
import ApplicationConfig from '../applicationConfig';
import { Auth } from './auth';


class Modules {
  public Auth: Auth;

  constructor(application: ApplicationConfig) {
    this.Auth = new Auth(application);
  }
}

export default Modules;

import { app } from 'firebase';
import { Auth } from './auth';

class Modules {
  public Auth: Auth;

  constructor(application: app.App) {
    this.Auth = new Auth(application);
  }
}

export default Modules;

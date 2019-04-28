import { app } from 'firebase';
import SignIn from './signIn';

export class Auth {
  public SignIn: SignIn;

  public Version: string = '0.0.19042701';

  constructor(application: app.App) {
    this.SignIn = new SignIn(application);
  }
}

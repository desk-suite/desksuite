import { app, auth } from 'firebase';

export default class SignIn {
  public auth: auth.Auth;
  constructor(application: app.App) {
    this.auth = auth(application);
  }
}

import { app, auth, firestore } from 'firebase';
import ApplicationConfig from '../../applicationConfig';
import SignIn from './signIn';

export class Auth {
  public firebaseApp: app.App;
  public businessId: string;
  public Version: string = '0.0.19042701';

  constructor(application: ApplicationConfig) {
    this.firebaseApp = application.firebase;
    this.businessId = application.businessId;
  }

  public async SignUpWithEmailAndPassword(email: string, password: string): Promise<string | undefined>{
    let result: string | undefined = undefined;
    const userCredential = await auth(this.firebaseApp).createUserWithEmailAndPassword(email, password);
    const db = firestore(this.firebaseApp);
    const col = db.collection('User');
    if(userCredential.user) {
      result = userCredential.user.uid
      const doc = col.doc(result);
      await doc.set({
        UserActive: true
      });
      await doc.collection('Business').doc(this.businessId).set({
        Rights: [

        ]
      })
    }
    return result;
  }

  public async DeleteUser(uid: string) {
    
  }
}

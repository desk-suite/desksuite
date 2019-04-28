export default class User {
  public Uid: string;
  public Name: string;
  public Surname: string;

  constructor(uid: string, name: string, surname: string) {
    this.Uid = uid;
    this.Name = name;
    this.Surname = surname;
  }
}

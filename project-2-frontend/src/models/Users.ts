export class Users {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  constructor(
    userId: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    this.userId = userId;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

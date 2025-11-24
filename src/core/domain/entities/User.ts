export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    private password: string,
  ) {}

  getPassword(): string {
    return this.password;
  }
}

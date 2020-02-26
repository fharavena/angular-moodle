export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public lasemailtname: string,
    public department: string,
    public institution: string,
    public firstaccess: number,
    public lastaccess: number,
    public city: string,
    public country: string,
    public profileimageurlsmall: string,
    public profileimageurl: string
  ){};
}

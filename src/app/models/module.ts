export class Module {
  constructor(
    public id: number,
    public url: string,
    public name: string,
    public instance: number,
    public visible: number,
    public uservisible: boolean,
    public visibleoncoursepage: number,
    public modicon: string,
    public modname: string,
    public modplural: string,
    public availability: string,
    public indent: number,
    public onclick: string,
    public afterlink: string,
    public customdata: string,
    public noviewlink: boolean,
    public completion: number
  ){};
}

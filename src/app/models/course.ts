export class Course {
  constructor(
    public id: number,
    public name: string,
    public visible: number,
    public summary: string,
    public summaryformat: number,
    public section: number,
    public hiddenbynumsections: number,
    public uservisible: boolean,
    public modules: any
  ){};
}

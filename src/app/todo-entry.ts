export class TodoEntry {
    public id = '';
    public title = '';
    public date  = '';
    public desc  = '';
    
    constructor(id: string, title: string, date: string, desc: string) {
      this.id = id;
      this.title = title;
      this.date  = date;
      this.desc  = desc;
    }
  }

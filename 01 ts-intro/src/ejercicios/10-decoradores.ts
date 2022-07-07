function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

  // para que los decoradores funcionen se tiene que habilitar en el tsconfig.json esto
  //"experimentalDecorators": true,  
  @reportableClassDecorator
  class report{
    type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
  }
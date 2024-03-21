import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logging {

  prefix: string;

  constructor() {
    this.prefix = "~~ ";
  }

  addPrefix = (msg: string) => {
    return this.prefix + msg;
  }

  log(msg: any) {
    // todo: depends on environment
    console.debug(this.addPrefix(msg));
    // if prod
    // console.log(this.addPrefix(msg));
  }
  error(msg: any) {
    // todo: depends on environment
    console.error(this.addPrefix(msg));
  }
  warn(msg: any) {
    // todo: depends on environment
    console.warn(this.addPrefix(msg));
  }

}

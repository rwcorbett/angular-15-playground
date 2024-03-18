import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logging {

  constructor() { }

  log(msg: any) {
    // todo: depends on environment
    console.debug(msg);
    // if prod
    console.log(msg);
  }
  error(msg: any) {
    // todo: depends on environment
    console.error(msg);
  }
  warn(msg: any) {
    // todo: depends on environment
    console.warn(msg);
  }


}

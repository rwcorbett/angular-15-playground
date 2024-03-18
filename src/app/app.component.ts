import { Component } from '@angular/core';
import { Logging } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/common.scss']
})
export class AppComponent {

  constructor(private logger: Logging) {
    const version = "15"; // todo: set dynamically?
    this.title = `Playground ${version}`;
    logger.log(`~~ starting ${this.title}`);
  }

  title: string; // todo: test this
}

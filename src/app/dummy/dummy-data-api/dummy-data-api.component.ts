import { Component } from '@angular/core';
import { DummyFetchService } from '../dummy-fetch.service';

@Component({
  selector: 'dummy-data-api',
  templateUrl: './dummy-data-api.component.html',
  styleUrls: ['./dummy-data-api.component.scss']
})
export class DummyDataAPIComponent {
  constructor(
    private fetchService: DummyFetchService
  ) {
    console.debug("-------load DummyDataAPIComponent", fetchService.quote);
    this.dataBlob = fetchService.quote;
  }

  dataBlob: {};
}

import { Component } from '@angular/core';
import { DummyFetchService } from '../dummy-fetch.service';

interface Quote {
  id: string
  author: string
  genre: string
  text: string
}

@Component({
  selector: 'dummy-data-api',
  templateUrl: './dummy-data-api.component.html',
  styleUrls: ['./dummy-data-api.component.scss']
})
export class DummyDataAPIComponent {

  quote: Quote = {
    id: '',
    author: '',
    genre: '',
    text: ''
  };

  constructor(
    private fetchService: DummyFetchService
  ) {
    // console.debug("3-------load DummyDataAPIComponent");
    const fetchData = fetchService.fetchQuote();
    fetchData.subscribe((resp) => {
      const dataObj = resp.body?.data[0];
      this.quote = {
        id: dataObj?._id,
        author: dataObj?.quoteAuthor,
        genre: dataObj?.quoteGenre,
        text: dataObj?.quoteText
      }
    });
  }
}

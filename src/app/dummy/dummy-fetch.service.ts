import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface QuoteResponse {
  statusCode: number
  message: string
  pagination: QuotePagination
  totalQuotes: number
  data: QuoteData[]
}

export interface QuotePagination {
  currentPage: number
  nextPage: any
  totalPages: number
}

export interface QuoteData {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
  __v: number
}

interface Quote {
  id: string
  author: string
  genre: string
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class DummyFetchService {

  /**
   * Get random quote from QuoteGarden:
   * https://github.com/pprathameshmore/QuoteGarden
   *
   */
  fetchQuote = async (client: HttpClient) => {
    client.get<QuoteResponse>(this.quoteUrl, {
      observe: 'response',
      responseType: 'json'
    })
    // .pipe((resp) => {
    .subscribe((resp) => {
      const dataObj = resp.body?.data[0];
      const quote = {
        id: dataObj?._id,
        author: dataObj?.quoteAuthor,
        genre: dataObj?.quoteGenre,
        text: dataObj?.quoteText
      }
      return quote;
    });
  }

  quoteUrl = "https://quote-garden.onrender.com/api/v3/quotes/random";
  // quote: Quote;
  quote: any;

  constructor(private client: HttpClient) {
    // this.quote = {};
    console.debug("-------load DummyFetchService");
    this.quote = this.fetchQuote(client);
  }

}

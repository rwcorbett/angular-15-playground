import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';

interface QuoteResponse {
  statusCode: number
  message: string
  pagination: QuotePagination
  totalQuotes: number
  data: QuoteData[]
}

interface QuotePagination {
  currentPage: number
  nextPage: any
  totalPages: number
}

interface QuoteData {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
  __v: number
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
  fetchQuote(): Observable<any> {
    return this.client.get<QuoteResponse>(this.quoteUrl, {
      observe: 'response',
      responseType: 'json'
    })
  }

  quoteUrl = "https://quote-garden.onrender.com/api/v3/quotes/random";

  constructor(private client: HttpClient) {
    // console.debug("2-------load DummyFetchService");
  }

}

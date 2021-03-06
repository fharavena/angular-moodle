import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./globals";

@Injectable()
export class QuizService {
  private url: string;
  public identity;
  public token;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

}

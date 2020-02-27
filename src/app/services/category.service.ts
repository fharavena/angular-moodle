import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./globals";

@Injectable()
export class CategoryService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

}

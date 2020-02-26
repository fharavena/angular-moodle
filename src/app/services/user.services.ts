import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { global } from "./globals";

@Injectable()
export class UserService {
  private url: string;
  public identity;
  public token;
  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  signup(user): Observable<any> {

    // Setup query parameter
    let params = new HttpParams();
    params = params.append("username", user.username);
    params = params.append("password", user.password);
    params = params.append("service", "moodle_mobile_app");

    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this._http.get(this.url + "login/token.php", { params: params });
  }

  UserProfile(token): Observable<any> {

    // Setup log namespace query parameter
    let params = new HttpParams();
    params = params.append("wstoken", token);
    params = params.append("moodlewsrestformat", "json");
    params = params.append("wsfunction", "core_webservice_get_site_info");

    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this._http.get(this.url + "/webservice/rest/server.php", { params: params });
  }
}

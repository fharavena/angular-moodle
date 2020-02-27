import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
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

  userprofile(token): Observable<any> {
    // Setup log namespace query parameter
    let params = new HttpParams();
    params = params.append("wstoken", token);
    params = params.append("moodlewsrestformat", "json");
    params = params.append("wsfunction", "core_webservice_get_site_info");

    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this._http.get(this.url + "/webservice/rest/server.php", {
      params: params
    });
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem("identity"));

    if (identity && identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token && token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}

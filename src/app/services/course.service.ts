import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./globals";

@Injectable()
export class CourseService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getcourses(token): Observable<any> {
    // Setup log namespace query parameter
    let params = new HttpParams();
    params = params.append("wstoken", token);
    params = params.append("moodlewsrestformat", "json");
    params = params.append("wsfunction", "core_course_get_courses_by_field");

    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this._http.get(this.url + "/webservice/rest/server.php", {
      params: params
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  public token;
  public identity;
  public courses_enrolled;
  public status;
  public loading = true;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.identity = JSON.parse(localStorage.getItem("identity"));
    this.getcourses_where_enrolled();
  }

  getcourses_where_enrolled() {
    this._courseService
      .getcourses_enrolled(this.token, this.identity.userid)
      .subscribe(
        response => {
          this.status = "success";
          this.courses_enrolled = response;
          this.loading = false;
        },
        error => {
          this.status = "error";
          console.log(<any>error);
        }
      );
  }
}

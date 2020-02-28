import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-asignatura",
  templateUrl: "./asignatura.component.html",
  styleUrls: ["./asignatura.component.css"],
  providers: [CourseService]
})
export class AsignaturaComponent implements OnInit {
  public token;
  public courses;
  public course;
  public status;
  public loading = true;
  public themes;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getcourse();
  }

  getcourse() {
    this._route.params.subscribe(params => {
      let id = params["id"];
      this.course = this._courseService.getcourse(this.token, id).subscribe(
        response => {
          this.status = "success";
          this.themes = response;
          console.log(this.themes);

          this.loading = false;
        },
        error => {
          this.status = "error";
          console.log(<any>error);
        }
      );
    });
  }
}

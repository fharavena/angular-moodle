import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { Course } from "src/app/models/course";


@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  public token;
  public courses;
  public status;
  public loading = true;

  constructor(private _courseService: CourseService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getcourses();
  }

  getcourses() {
    this.courses = this._courseService.getcourses(this.token).subscribe(
      response => {
        //this.courses = slice(response,['id','fullname']);
        this.status = "success";
        this.courses = response.courses
          .filter(obj => {
            return obj.fullname !== "Liceo Virtual";
          })
          .map(obj => ({
            id: obj.id,
            fullname: obj.fullname,
            categoryid: obj.categoryid,
            sortorder: obj.sortorder
          }))
          .sort((a, b) => {
            // Use toUpperCase() to ignore character casing
            const bandA = a.sortorder;
            const bandB = b.sortorder;

            let comparison = 0;
            if (bandA > bandB) {
              comparison = 1;
            } else if (bandA < bandB) {
              comparison = -1;
            }
            return comparison;
          });
          this.loading = false;
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = "Login";
    this.user = new User(1, "", "", "", "", "", "", "", 1, 1, "", "", "", "");
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(form) {
    this._userService.signup(this.user).subscribe(
      response => {
        if (
          response.status != "error" &&
          response.exception != "moodle_exception"
        ) {
          this.token = response.token;
          this._userService.userprofile(response.token).subscribe(
            response => {
              if (this.token != undefined && this.token != null) {
                this.status = "success";
                this.identity = response;
                localStorage.setItem("token", this.token);
                //podar identity
                localStorage.setItem("identity", JSON.stringify(this.identity));
                this._router.navigate(["inicio"]);
              } else {
                //error de login
                this.status = "error";
              }
            },
            error => {
              this.status = "error";
              console.log(<any>error);
            }
          );
        } else {
          this.status = "error";
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }

  logout() {
    this._route.params.subscribe(params => {
      let logout = +params["sure"];

      if (logout == 1) {
        localStorage.removeItem("identity");
        localStorage.removeItem("token");
        this.identity = null;
        this.token = null;
        this._router.navigate(["login"]);
      }
    });
  }
}

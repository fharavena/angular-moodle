import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.services";

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

  constructor(private _userService: UserService) {
    this.page_title = "Login";
    this.user = new User(1, "", "", "", "", "", "", "", 1, 1, "", "", "", "");
  }

  ngOnInit(): void {}

  onSubmit(form) {
    this._userService.signup(this.user).subscribe(
      response => {
        if (response.status != "error") {
          this.token = response.token;
          this._userService.UserProfile(response.token).subscribe(
            response => {
              this.status = "success";
              this.identity = response;
              localStorage.setItem("token", this.token);
              //podar identity
              localStorage.setItem("identity", JSON.stringify(this.identity));
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
}

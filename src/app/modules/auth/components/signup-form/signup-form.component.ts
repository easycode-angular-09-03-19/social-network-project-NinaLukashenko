import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordEqual } from "@helpers/validators";
import { days, months, years, genders } from "../../helpers/signup-data";
import { Router } from "@angular/router";
import { SignupService } from "../../services/signup.service";
import { SignupServerAnswer } from "../../interfaces/signup-server-answer";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;
  days = days;
  months = months;
  years = years;
  genders = genders;
  filledForm;
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        first_name: new FormControl("", Validators.required),
        last_name: new FormControl("", Validators.required),
        nickname: new FormControl("", Validators.required),
        date_of_birth_day: new FormControl("", Validators.required),
        date_of_birth_month: new FormControl("", Validators.required),
        date_of_birth_year: new FormControl("", Validators.required),
        country: new FormControl("", Validators.required),
        city: new FormControl("", Validators.required),
        gender_orientation: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        phone: new FormControl("", Validators.required),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8)
        ]),
        repeatPassword: new FormControl("", Validators.required)
      },
      { validators: passwordEqual, updateOn: "submit" }
    );
  }

  onSubmit() {
    if (!this.signUpForm.invalid) {
      this.filledForm = { ...this.signUpForm.value };
      let { repeatPassword, ...form } = this.filledForm;

      this.signupService.signup(form).subscribe(
        (res: SignupServerAnswer) => {
          if (!res.error) {
            console.log(res);
            this.router.navigate(["/auth/login"]);
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log("The form has status invalid. Please fill in it correctly.");
    }
  }
}

import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { passwordEqualForInput } from "@helpers/validators";
import { days, months, years, genders } from "../../helpers/signup-data";
import { Router } from "@angular/router";
import { SignupService } from "../../services/signup.service";
import { SignupServerAnswer } from "../../interfaces/signup-server-answer";
import { MessageService } from "primeng/api";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted);
  }
}

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
  matcher = new MyErrorStateMatcher();
  constructor(
    private signupService: SignupService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
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
      repeatPassword: new FormControl("", [
        Validators.required,
        passwordEqualForInput
      ])
    });
  }

  onSubmit() {
    if (!this.signUpForm.invalid) {
      this.filledForm = { ...this.signUpForm.value };
      let { repeatPassword, ...form } = this.filledForm;

      this.signupService.signup(form).subscribe(
        (res: SignupServerAnswer) => {
          if (!res.error) {
            this.messageService.add({
              severity: "success",
              summary: "User was created successfully",
              detail:
                "On your email was sended a link. Please verify your email."
            });
            setTimeout(() => {
              this.router.navigate(["/auth/login"]);
            }, 5500);
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
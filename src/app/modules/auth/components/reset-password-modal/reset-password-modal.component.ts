import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ResetPasswordServerAnswer } from "../../interfaces/reset-password-server-answer";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-reset-password-modal",
  templateUrl: "./reset-password-modal.component.html",
  styleUrls: ["./reset-password-modal.component.css"]
})
export class ResetPasswordModalComponent implements OnInit {
  @Output("modalClose") modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;
  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
    });
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit() {
    this.authService
      .resetPassword({ ...this.resetPasswordForm.value })
      .subscribe(
        (res: ResetPasswordServerAnswer) => {
          if (!res.error) {
            this.messageService.add({
              severity: "success",
              summary: "Password was reseted successfully",
              detail: "A new password was sent on your email."
            });
            setTimeout(() => {
              this.closeModal();
            }, 5500);
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}

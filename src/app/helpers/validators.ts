import { AbstractControl } from "@angular/forms";

export function passwordEqual(
  form: AbstractControl
): { [key: string]: any } | null {
  const areEqual = form.value.password === form.value.repeatPassword;
  return !areEqual ? { notEqual: true } : null;
}

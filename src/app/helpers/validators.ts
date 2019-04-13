import { AbstractControl } from "@angular/forms";

export function passwordEqual(
  form: AbstractControl
): { [key: string]: any } | null {
  //console.log(form);
  const areEqual = form.value.password === form.value.repeatPassword;
  //console.log(areEqual)
  return !areEqual ? { notEqual: true } : null;
}

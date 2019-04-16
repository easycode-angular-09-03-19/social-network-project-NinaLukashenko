import { AbstractControl } from "@angular/forms";

export function passwordEqualForInput(
  control: AbstractControl
): { [key: string]: any } | null {
  const passwordValue = control.parent ? control.parent.value.password : null;
  return passwordValue !== control.value ? { notEqual: true } : null;
}

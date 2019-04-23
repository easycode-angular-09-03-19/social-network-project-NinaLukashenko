//days:
let days = [];
let i = 1;

while (i < 32) {
  days.push(i);
  i++;
}

export { days };

//months:
export const months = [
  { viewValue: "January", value: 1 },
  { viewValue: "February", value: 2 },
  { viewValue: "March", value: 3 },
  { viewValue: "April", value: 4 },
  { viewValue: "May", value: 5 },
  { viewValue: "June", value: 6 },
  { viewValue: "July", value: 7 },
  { viewValue: "August", value: 8 },
  { viewValue: "September", value: 9 },
  { viewValue: "October", value: 10 },
  { viewValue: "November", value: 11 },
  { viewValue: "December", value: 12 }
];

//years:
let years = [];
let startYear = 1900;
let currentYear = new Date().getFullYear();

for (let i = 0; i <= currentYear - startYear; i++) {
  years[i] = startYear + i;
}

export { years };

//gender:
const genders = ["male", "female"];

export { genders };

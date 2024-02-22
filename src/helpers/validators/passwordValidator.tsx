import { ValidatorResponse } from "./types";

export default function (password: string): ValidatorResponse {
  let message = "";

  if (password.length <= 6)
    message += "Password must be more than 6 digits long! ";

  let hasDigit = false;

  for (let i = 0; i <= password.length; i++) {
    if (!Number.isNaN(Number(password[i]))) {
      hasDigit = true;
      break;
    }
  }

  if (!hasDigit) message += "Password must contain atleast one digit! ";

  return {
    success: message ? false : true,
    message: message ? message : "Password is valid!",
  };
}

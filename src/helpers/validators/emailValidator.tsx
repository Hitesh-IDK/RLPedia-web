import { ValidatorResponse } from "./types";
import { validate } from "email-validator";

export default function (email: string): ValidatorResponse {
  return {
    success: validate(email),
    message: validate(email)
      ? "Email seems to be valid!"
      : "Email is invalid! Please check again!",
  };
}

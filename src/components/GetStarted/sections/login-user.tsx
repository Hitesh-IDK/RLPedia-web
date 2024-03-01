import styles from "./section.module.css";
import specificStyles from "./login.module.css";
import loginGif from "../../../public/images/login.gif";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import emailValidator from "../../../helpers/validators/emailValidator";
import { ValidatorResponse } from "../../../helpers/validators/types";
import passwordValidator from "../../../helpers/validators/passwordValidator";
import { useNavigate } from "react-router-dom";

export default function ({
  setClickCounter,
}: {
  setClickCounter: Dispatch<SetStateAction<number>>;
}): JSX.Element {
  const navigate = useNavigate();

  const [invalidFieldDetected, setInvalidFieldDetected] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");

  const [inputField, setInputField] = useState("");

  const [isEmailEntered, setIsEmailEntered] = useState("");
  const [isPasswordEntered, setIsPasswordEntered] = useState("");

  const [accountExistsClicked, setAccountExistsClicked] = useState(false);

  const fieldChangeHandler = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement)?.value;
    setInputField(value);
  };

  useEffect(() => {}, [invalidFieldDetected]);

  return (
    <>
      <div className={specificStyles.main__container}>
        {accountExistsClicked && (
          <div className={specificStyles.sub__container}>
            <div className={specificStyles.main__title}>
              Login to your account
            </div>

            <div className={specificStyles.main__desc}>
              and discover your personalized learning path
            </div>

            <input
              value={inputField}
              onChange={fieldChangeHandler}
              className={specificStyles.login__email}
              type={!isEmailEntered ? "email" : "password"}
              placeholder={!isEmailEntered ? "Email" : "Password"}
            ></input>

            <button
              className={specificStyles.btn__continue}
              onClick={() => {
                if (!isEmailEntered) {
                  const validatedResponse: ValidatorResponse =
                    emailValidator(inputField);
                  if (validatedResponse.success) {
                    setIsEmailEntered(inputField);
                    setInputField("");
                  } else {
                    setInvalidMessage(validatedResponse.message);
                    setInvalidFieldDetected(true);
                  }
                } else {
                  const validatedResponse: ValidatorResponse =
                    passwordValidator(inputField);

                  if (validatedResponse.success) {
                    setIsPasswordEntered(inputField);
                    setInputField("");
                  } else {
                    setInvalidMessage(validatedResponse.message);
                    setInvalidFieldDetected(true);
                  }
                }
              }}
            >
              Continue
            </button>

            <div className={specificStyles.divider}> a</div>

            <div
              className={specificStyles.login__other}
              onClick={() => setAccountExistsClicked(false)}
            >
              Dont have an account? Signup
            </div>
          </div>
        )}

        <img src={loginGif} alt="Login Gif" />

        {!accountExistsClicked && (
          <div className={specificStyles.sub__container}>
            <div className={specificStyles.main__title}>
              Create a free account
            </div>

            <div className={specificStyles.main__desc}>
              to discover your personalized learning path
            </div>

            <input
              value={inputField}
              onChange={fieldChangeHandler}
              className={specificStyles.login__email}
              type={!isEmailEntered ? "email" : "password"}
              placeholder={
                !isEmailEntered
                  ? "Email"
                  : !isPasswordEntered
                  ? "Password"
                  : "Retype Password"
              }
            ></input>

            <button
              className={specificStyles.btn__continue}
              onClick={() => {
                if (!isEmailEntered) {
                  const validatedResponse: ValidatorResponse =
                    emailValidator(inputField);
                  if (validatedResponse.success) {
                    setIsEmailEntered(inputField);
                    setInputField("");
                  } else {
                    setInvalidMessage(validatedResponse.message);
                    setInvalidFieldDetected(true);
                  }
                } else if (!isPasswordEntered) {
                  const validatedResponse: ValidatorResponse =
                    passwordValidator(inputField);

                  if (validatedResponse.success) {
                    setIsPasswordEntered(inputField);
                    setInputField("");
                  } else {
                    setInvalidMessage(validatedResponse.message);
                    setInvalidFieldDetected(true);
                  }
                } else {
                  navigate("/");
                }
              }}
            >
              Continue
            </button>

            <div className={specificStyles.divider}> a</div>

            <div
              className={specificStyles.login__other}
              onClick={() => {
                setAccountExistsClicked(true);
              }}
            >
              Already have an account? Login
            </div>
          </div>
        )}
      </div>
    </>
  );
}

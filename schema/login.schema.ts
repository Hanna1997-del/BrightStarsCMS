import * as Yup from "yup";
const { object, string } = Yup;

import YupPassword from "yup-password";
YupPassword(Yup);

const loginSchema = object({
  email: string().email("Please provide valid email").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must contain 8 characters")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
});

export default loginSchema;

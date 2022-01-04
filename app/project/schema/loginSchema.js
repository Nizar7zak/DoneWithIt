import * as Yup from "yup";

export default loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(
      /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/,
      "Password must contain at least 8 characters, one uppercase, one lower case, one number and one special case character"
    )
    .label("Password"),
});

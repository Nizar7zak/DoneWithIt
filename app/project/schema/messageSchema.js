import * as Yup from "yup";

export default messageSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

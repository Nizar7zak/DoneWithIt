import * as Yup from "yup";

export default listingSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  image: Yup.array()
    .required()
    .min(1, "Please select at least one Image!")
    .label("Images"),
});

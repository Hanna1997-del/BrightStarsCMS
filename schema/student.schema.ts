import * as Yup from "yup";
const { object, string, number } = Yup;



const studentSchema = object({
  email: string().email("Please provide valid email").required("Email is required"),
  name: string().required("Please provide student name"),
  age: number().required("Please provide student age"),
});

export default studentSchema;

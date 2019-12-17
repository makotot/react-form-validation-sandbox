import * as React from "react";
import { useFormik } from "formik";

const EMAIL_PATTERN = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const validate = values => {
  const errors: any = {};

  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Invalid email pattern";
  }
  if (!values.email) {
    errors.email = "This is a required field";
  }

  return errors;
};

export const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: ""
    },
    validate,
    onSubmit: data => {
      console.log(data);
    }
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  return (
    <div>
      <h2>formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
          />
          <span>{formik.errors.email}</span>
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </div>
  );
};

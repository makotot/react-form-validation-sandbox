import * as React from "react";
import useForm from "react-hook-form";
import { Input } from "./Input";

const EMAIL_PATTERN = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const HookForm = () => {
  const methods = useForm({
    mode: "onChange"
  });
  const [nameValue, setNameValue] = React.useState("");
  const submit = data => {
    console.log(data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };
  console.log(methods.errors);

  return (
    <div>
      <h2>react-hook-form</h2>
      <form onSubmit={methods.handleSubmit(submit)}>
        <p>
          <label>email</label>
          <input
            type="text"
            name="email"
            ref={methods.register({
              required: "this is a required field",
              validate: {
                validMailPattren: (value: string) =>
                  EMAIL_PATTERN.test(value) || "invalid email pattern"
              }
            })}
          />
          {methods.errors.email && methods.errors.email.message}
        </p>
        <p>
          <label>name</label>
          <Input
            type="text"
            name="name"
            value={nameValue}
            onChange={handleChange}
            inputRef={methods.register({
              required: "this is a required field"
            })}
          />
          {methods.errors.name && methods.errors.name.message}
        </p>
        <p>
          <button type="submit">submit</button>
        </p>
      </form>
    </div>
  );
};

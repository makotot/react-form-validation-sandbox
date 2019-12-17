import * as React from "react";
import { render } from "react-dom";
import { HookForm } from "./HookForm";
import { FormikForm } from "./FormikForm";

function App() {
  return (
    <div>
      <FormikForm />
      <HookForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

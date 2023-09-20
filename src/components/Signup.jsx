import React, { useState } from "react";
import Input from "./Input";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  return (
    <div>
      <form action="">
        <Input
          type="text"
          placeholder="Enter your email..."
          name="email"
          value={values.email}
          values={values}
          setValues={setValues}
          error={error}
          setError={setError}
        />
        <Input
          type="text"
          placeholder="Enter your first name..."
          name="firstName"
          value={values.firstName}
          values={values}
          setValues={setValues}
          error={error}
          setError={setError}
        />
        <Input
          type="text"
          placeholder="Enter your last name..."
          name="lastName"
          value={values.lastName}
          values={values}
          setValues={setValues}
          error={error}
          setError={setError}
        />
        <Input
          type="text"
          placeholder="Enter your password"
          name="password"
          value={values.password}
          values={values}
          setValues={setValues}
          error={error}
          setError={setError}
        />
        <button>submit </button>
      </form>
    </div>
  );
};

export default Signup;

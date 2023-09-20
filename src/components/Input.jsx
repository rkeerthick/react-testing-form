import React from "react";

const Input = ({
  type,
  placeholder,
  name,
  values,
  setValues,
  error,
  setError,
}) => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    let regex;
    if (name === "email") {
      regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    } else if (name === "firstName" || name === "lastName") {
      regex = /^[A-Za-z]$/;
    } else if (name === "password") {
      regex = /^[A-Za-z0-9]$/;
    }
    if (e.target.value !== "") {
      if (!regex.test(e.target.value)) {
        setError({ ...error, [e.target.name]: "Invalid " + e.target.name });
        return;
      }
    } else {
      setError({ ...error, [e.target.name]: "Enter " + e.target.name });
        return;
    }

    setError({ ...error, [e.target.name]: "" });
  };
  console.log(values, "values");
  console.log(error, "error");

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <p>{error[name]}</p>
    </div>
  );
};

export default Input;

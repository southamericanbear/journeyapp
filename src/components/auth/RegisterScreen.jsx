import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordEmail } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { loading, msgError } = useSelector((state) => state.ui);

  const [formValue, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValue;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordEmail(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length < 5) {
      dispatch(setError("Username Should be at least 6(six) characters long"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Use a valid email"));
      return false;
    } else if (password !== password2 || password < 5) {
      dispatch(
        setError("Password doesn't match and has to be 6(six) characters long")
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>

      {msgError && (
        <div className="auth__alter-error">
          <h5>{msgError}</h5>
        </div>
      )}

      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
      >
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={loading}
        >
          Register
        </button>

        <Link className="link " to="/auth/login">
          Already register?
        </Link>
      </form>
    </>
  );
};

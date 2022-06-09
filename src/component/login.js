import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
  const [passVisible, setPassVisible] = useState(true);

  return (
    <section className="login">
      <form className="form-action" id="form">
        <h4 className="bold text-center login-header">LogIn</h4>
        <br />
        <div className="login-container">
          <label className="input-label" htmlFor="email">
            Email address
          </label>
          <input
            className="input-action"
            type="email"
            id="email"
            name="email"
            placeholder="Jane@compony.com"
            required
          />
          <p className="input-danger" id="invalid-email"></p>
          <br />
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-action"
            type={passVisible ? "password" : "text"}
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            placeholder="********"
            required
          />
          <span className="flex-center">
            {passVisible ? (
              <p className="p1" onClick={() => setPassVisible(!passVisible)}>
                Show Password
              </p>
            ) : (
              <p className="p1" onClick={() => setPassVisible(!passVisible)}>
                Hide Password
              </p>
            )}
          </span>
          <p className="input-danger" id="invalid-password"></p>

          <div className="text-center">
            <button
              className="button button-primary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
            >
              Login
            </button>
            <button
              className="button button-secondary btn-full bold btn-submit"
              id="btn-submit"
              type="submit"
            >
              Guest Login
            </button>
            <Link className="link-create" to="/Signup" id="btn-cancel">
              Create New Account
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

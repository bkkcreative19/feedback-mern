import { Context } from "context/context";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const history = useHistory();
  const { login } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const obj = {
      email,
      password,
    };

    try {
      await login(obj, history);
    } catch (err) {
      // setErrors(err);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__right">
          <div className="login__right-container">
            {/* <img
          src={Logo}
          alt="logo"
          className="login__right-container-logo"
        /> */}
            <form
              onSubmit={handleLogin}
              className="login__right-container-form"
            >
              {errors}
              <input
                type="text"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Email Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Login</button>
            </form>
          </div>
          <div className="login__right-dont">
            <p>Don't have an account?</p>
            {/* <Link to={ROUTES.SIGN_UP}>
          <span>Sign up</span>
        </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

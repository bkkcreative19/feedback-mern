import { Context } from "context/context";
import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { login } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(username, password));
    } catch (err) {
      // setErrors(err);
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

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
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder=" Password"
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

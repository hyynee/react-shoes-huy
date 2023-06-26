import React, { useRef } from "react";
//
import { useNavigate } from "react-router-dom";
const Login = () => {
  const userLogin = useRef({
    loginName: "",
    loginPassword: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLogin.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userLogin.current.loginName === "nguyenanhhuy" &&
      userLogin.current.loginPassword === "123"
    ) {
      navigate("/");
    } else {
      alert("sai thông tin");
    }
  };
  return (
    <div className="container">
      {/* thêm dòng form-notch chạy cho đúng */}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-google" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-github" />
              </button>
            </div>
            <p className="text-center">or:</p>

            <div className="form-outline mb-4">
              <input
                type="email"
                id="loginName"
                className="form-control"
                onInput={handleChange}
              />
              <label className="form-label" htmlFor="loginName">
                Email or username
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                onInput={handleChange}
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="loginCheck"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-google" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-github" />
              </button>
            </div>
            <p className="text-center">or:</p>
            {/* Name input */}
            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Username input */}
            <div className="form-outline mb-4">
              <input
                type="text"
                id="registerUsername"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerUsername">
                Username
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Repeat Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue
                id="registerCheck"
                defaultChecked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign up
            </button>
          </form>
        </div>
      </div>
      {/* Pills content */}
    </div>
  );
};

export default Login;

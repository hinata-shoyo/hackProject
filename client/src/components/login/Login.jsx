import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Login.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import Alert from "../alert/alert";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://scholar-sphere-puce.vercel.app/user/login", {
        username,
        password,
      });
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      window.location.href = "/";
      console.log("logged in");
    } catch (error) {
      console.log(error.response.data.msg);
      setError(error.response.data.msg);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <MDBContainer
      fluid
      style={{ backgroundColor: "lavender" }}
    >
      <MDBRow>
        <MDBCol col="10" md="6" style={{ marginTop: "90px" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" style={{ marginTop: "160px" }}>
          <MDBInput
            style={{ marginTop: "90px", width: "50px !important" }}
            wrapperClass="mb-4 "
            label="Username"
            id="formControlLg"
            type="text"
            size="lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="lg"
          />
          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="mb-0 px-5" size="lg" onClick={handleLogin}>
              Login
            </MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <a href="/signup" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
      <Alert message={error} />
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"
        style={{ position: "relative", marginTop: "260px" }}
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2024. All rights reserved.
        </div>

        <div>
          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="mx-3"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Login;

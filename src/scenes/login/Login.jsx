import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Avtar from "./img/avatar.svg";
import Bg from "./img/bg.svg";
import WaveImg from "./img/wave.png";

async function loginUser(credentials) {
  return fetch("https://rodhak11.onrender.com/himraahi/owner", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

export default function Login({ setToken, setId }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    console.log("kanak");
    e.preventDefault();
    const { token, data } = await loginUser({
      email,
      password,
    });
    console.log(token, data._id);
    setToken(token);
    setId(data._id);
  };
  return (
    //login form 1

    // <div className="box-form">
    //   <div className="left">
    //     <div className="overlay">
    //       <h1>RODHAK</h1>
    //       <h4>Owner Login</h4>
    //       <p></p>
    //       <span>
    //         <p>Join us onsocial media</p>
    //         <a href=" https://www.facebook.com/dndrodhak/ ">
    //           <i className="fa fa-facebook" aria-hidden="true">
    //             Facebook
    //           </i>
    //         </a>
    //         <a href="https://www.instagram.com/dndrodhak/">
    //           <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
    //         </a>
    //       </span>
    //     </div>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     <div className="right">
    //       <h5>Login</h5>
    //       <p>
    //         Don't have an account?{" "}
    //         <a href="https://rodhak11.onrender.com/api/v1/owner/register">
    //           Creat Your Account
    //         </a>{" "}
    //         it takes less than a minute
    //       </p>
    //       <div className="inputs">
    //         <input
    //           type="email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           name="email"
    //           placeholder="Enter your email address"
    //         />
    //         <br />
    //         <input
    //           type="password"
    //           onChange={(e) => setPassword(e.target.value)}
    //           name="password"
    //           placeholder="Enter your password"
    //         />
    //       </div>

    //       <br />
    //       <br />

    //       <div className="remember-me--forget-password">
    //         <label>
    //           <input type="checkbox" name="item" checked />
    //           <span className="text-checkbox">Remember me</span>
    //         </label>
    //         <p>forget password?</p>
    //       </div>

    //       <br />
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>

    ////////////////////// login form 2
    // <div className="login-wrapper">
    //   <h1>Please Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <p>Username</p>
    //       <input
    //         type="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //         name="email"
    //       />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         name="password"
    //       />
    //     </label>
    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>

    // logiin form 3

    <>
      <img className="wave" src={WaveImg} alt="imgg" />
      <div className="container">
        <div className="img">
          <img
            src={Bg}
            alt="imgg
          "
          />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={Avtar} />
            <h2 className="title">Owner Login</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                {/* <h5>Username</h5> */}
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="input"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

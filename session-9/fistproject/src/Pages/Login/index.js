import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    passwordErr: "",
    emailErr: "",
  });

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    let emailErr = "";
    let passwordErr = "";
    if (email === "") {
      emailErr = "Please enter a valid email";
    }

    if (password === "") {
      passwordErr = "Please enter password";
    }

    if (emailErr !== "" || passwordErr !== "") {
      setError({ ...error, emailErr, passwordErr });
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    alert("Form is submitted");
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-4" style={{ maxWidth: "500px" }}>
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleChangeEmail}
            />
            <span>{error.emailErr}</span>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handleChangePassword}
            />
            <span>{error.passwordErr}</span>
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

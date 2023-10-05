const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  var emailErr = "";
  var passwordErr = "";

  if (email.value === "") {
    emailErr = "Please enter you email";
  }

  if (password.value === "") {
    passwordErr = "Please enter your password";
  }

  let errorMsg = [
    { input: email, errorMsg: emailErr },
    { input: password, errorMsg: passwordErr },
  ];

  errorMsg.forEach((data) => {
    const { input, errorMsg } = data;
    if (errorMsg == "") {
      return;
    }
    
    const span = document.createElement("span");
    span.classList.add("error");
    span.innerText = errorMsg;
    input.parentElement.append(span);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const idInput = document.getElementById("user-id");
  const pwInput = document.getElementById("user-pw");
  const pwConfirmInput = document.getElementById("user-pw-2");
  const submitButton = document.querySelector(".submit");
  const form = document.getElementById("signup-form");
  const errorMsg = document.getElementById("error-message");

  function isValidPassword(pw) {
    const minLength = pw.length >= 8;
    const hasUpper = /[A-Z]/.test(pw);
    const hasLower = /[a-z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[@!?_-]/.test(pw);
    const onlyAllowed = /^[A-Za-z0-9@!?_-]+$/.test(pw);
    return (
      minLength &&
      hasUpper &&
      hasLower &&
      hasNumber &&
      hasSpecial &&
      onlyAllowed
    );
  }

  function validateForm() {
    const idFilled = idInput.value.trim().length > 0;
    const pwValid = isValidPassword(pwInput.value);
    const pwMatch = pwInput.value === pwConfirmInput.value;

    const isValid = idFilled && pwValid && pwMatch;

    submitButton.disabled = !isValid;
    submitButton.style.backgroundColor = isValid ? "#5E0080" : "#e2e2e2";
    submitButton.style.color = isValid ? "#fff" : "#999";

    if (pwConfirmInput.value.length > 0 && !pwMatch) {
      errorMsg.textContent = "비밀번호가 일치하지 않습니다!";
      errorMsg.classList.add("error-message");
      errorMsg.style.color = "#fa622f";
    } else {
      errorMsg.textContent = "";
    }
  }

  idInput.addEventListener("input", validateForm);
  pwInput.addEventListener("input", validateForm);
  pwConfirmInput.addEventListener("input", validateForm);
});

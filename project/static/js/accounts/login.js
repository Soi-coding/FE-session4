/* login page - JS */

document.addEventListener("DOMContentLoaded", function () {
  const idInput = document.getElementById("user-id");
  const pwInput = document.getElementById("user-pw");
  const submitButton = document.querySelector(".submit-login");

  pwInput.style.webkitTextSecurity = "*";

  function toggleButtonState() {
    const idFilled = idInput.value.trim() !== "";
    const pwValid = pwInput.value.length >= 8;

    if (idFilled && pwValid) {
      submitButton.disabled = false;
      submitButton.style.background = "var(--point-main, #5E0080)";
      submitButton.style.color = "#fff";
      submitButton.style.cursor = "pointer";
    } else {
      submitButton.disabled = true;
      submitButton.style.background = "var(--stroke-stroke-2, #e2e2e2)";
      submitButton.style.color = "var(--font-font2, #999)";
      submitButton.style.cursor = "default";
    }
  }
  // 초기 버튼 상태 설정
  toggleButtonState();

  // 입력값이 바뀔 때마다 버튼 상태 확인
  idInput.addEventListener("input", toggleButtonState);
  pwInput.addEventListener("input", toggleButtonState);
});

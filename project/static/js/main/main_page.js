/* main page - JS */
const checkboxes = document.querySelectorAll(
  '.custom-checkbox input[type="checkbox"]'
);
const selectedContainer = document.querySelector(".selected-categories");
const totalCountSpan = document.querySelector(".product-header > span");
const resetBtn = document.querySelector(".reset");

// 선택된 카테고리를 저장할 배열
let selectedCategories = [];

function updateSelectedDisplay() {
  selectedContainer.innerHTML = "";
  let totalSelectedCount = 0;

  selectedCategories.forEach((category) => {
    const categoryEl = document.createElement("span");
    categoryEl.className = "selected-tag";
    categoryEl.innerHTML = `
  ${category.name} 
  <img src="/static/assets/icons/close.svg" data-name="${category.name}" alt="닫기" />
`;
    selectedContainer.appendChild(categoryEl);
    totalSelectedCount += category.count;
  });

  // 총 건수 업데이트
  const defaultTotal = 508;
  const displayCount =
    totalSelectedCount > 0 ? totalSelectedCount : defaultTotal;
  totalCountSpan.textContent = `총 ${displayCount}건`;
}

// 체크박스 변화 감지
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const label = this.closest("label");
    const name = label.textContent.trim().replace(/\d+$/, "").trim();
    const count = parseInt(label.querySelector("span").textContent.trim());

    if (this.checked) {
      if (!selectedCategories.find((item) => item.name === name)) {
        selectedCategories.push({ name, count });
      }
    } else {
      selectedCategories = selectedCategories.filter(
        (item) => item.name !== name
      );
    }

    updateSelectedDisplay();
  });
});

// X 버튼으로 제거
selectedContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    const name = e.target.dataset.name;
    selectedCategories = selectedCategories.filter(
      (item) => item.name !== name
    );

    checkboxes.forEach((checkbox) => {
      const label = checkbox.closest("label");
      if (label.textContent.includes(name)) {
        checkbox.checked = false;
      }
    });

    updateSelectedDisplay();
  }
});

// 초기화 버튼
resetBtn.addEventListener("click", function () {
  selectedCategories = [];
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateSelectedDisplay();
});

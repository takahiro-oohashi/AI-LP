const button = document.getElementById("helloBtn");

if (button) {
  button.addEventListener("click", () => {
    alert("Hello!");
  });
}

const applyCheckbox = document.querySelector(".apply__checkbox");
const applyPayButtons = document.querySelectorAll(".apply__pay-btn");

if (applyCheckbox && applyPayButtons.length) {
  const updateApplyButtons = () => {
    const enabled = applyCheckbox.checked;
    applyPayButtons.forEach((btn) => {
      btn.classList.toggle("is-disabled", !enabled);
      btn.setAttribute("aria-disabled", String(!enabled));
      if (!enabled) {
        btn.setAttribute("tabindex", "-1");
      } else {
        btn.removeAttribute("tabindex");
      }
    });
  };

  updateApplyButtons();
  applyCheckbox.addEventListener("change", updateApplyButtons);
}

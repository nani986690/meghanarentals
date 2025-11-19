document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("discount-portal");
  const closeModal = () => (target.outerHTML = "");
  const closeBtn = target.querySelector("button.close-btn");
  closeBtn.addEventListener("click", closeModal);
  return;
});

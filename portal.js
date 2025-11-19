export function portal(msg) {
  const target = document.getElementById("modal-root");
  if (!target) {
    return alert(msg);
  } else {
    target.innerHTML = `<div class="smodal">
        
        ${msg}
        <button class="modal-btn" onclick="document.getElementById('modal-root').innerHTML = ''">X</button>
        </div>
      `;
  }
}

export function confirmPortal(msg, onConfirm) {
  const target = document.getElementById("modal-root");
  if (!target) {
    return alert(msg);
  } else {
    target.innerHTML = `<div class="smodal-confirm smodal">
        
        ${msg}
        <div class="modal-actions">
          <button class="modal-btn confirm-btn">Confirm</button>
          <button class="modal-btn cancel-btn">Cancel</button>
        </div>
        </div>
      `;

    const confirmBtn = target.querySelector(".confirm-btn");
    const cancelBtn = target.querySelector(".cancel-btn");

    confirmBtn.addEventListener("click", () => {
      onConfirm();
      target.innerHTML = "";
    });

    cancelBtn.addEventListener("click", () => {
      target.innerHTML = "";
    });
  }
}
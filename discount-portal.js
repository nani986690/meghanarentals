document.addEventListener("DOMContentLoaded", function () {

  const SESSION_KEY = "discountPortalSessionShown";

  // Detect index page
  const isIndexPage =
    location.pathname === "/" ||
    location.pathname.endsWith("index.html") ||
    location.pathname === "";

  // Only show on index
  if (isIndexPage) {

    // If this tab already showed the portal, do NOT show again
    if (sessionStorage.getItem(SESSION_KEY)) {
      console.log("Portal already shown this session — not showing again");
      return;
    }

    // Mark as shown (only for this tab session)
    sessionStorage.setItem(SESSION_KEY, "1");

    // Create modal
    let target = document.createElement("div");
    target.id = "discount-portal";
    target.innerHTML = `
      <div class="glass-card">
        <button class="close-btn">X</button>
        <div class="hero-card">
          <h3>Special Offer</h3>
          <p class="p1">Get up to <strong>10% OFF</strong></p>
          <p class="discount-tag">Buy at least 2 items</p>
        </div>
      </div>
    `;

    target.style.position = "fixed";
    target.style.inset = "0";
    target.style.display = "grid";
    target.style.placeItems = "center";
    target.style.background = "rgba(0,0,0,0.35)";
    target.style.zIndex = "9999";

    document.body.appendChild(target);

    // Close logic
    const closeModal = () => target.remove();
    target.querySelector(".close-btn").addEventListener("click", closeModal);
    target.addEventListener("click", e => {
      if (e.target === target) closeModal();
    });

    console.log("Portal shown for fresh browser session");
  }
});

import { renderByPagination } from "./pagination.js";
import { initAdvancedProductObserver } from "./observer.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Intersection Observer for product tracking
  const productObserver = initAdvancedProductObserver();

  renderByPagination("menProducts", 9, true, () => productObserver.reobserveCards());
  // Ensure observer attaches to the initially rendered cards
  productObserver.reobserveCards();

  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter)
    priceFilter.addEventListener("change", () => {
      renderByPagination("menProducts", 9, true, () => productObserver.reobserveCards());
      productObserver.reobserveCards();
    });
});

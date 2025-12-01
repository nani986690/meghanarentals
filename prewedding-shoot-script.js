import { renderByPagination } from "./pagination.js";
import { initAdvancedProductObserver } from "./observer.js";
import { preweddingShootProducts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const productObserver = initAdvancedProductObserver();

  renderByPagination("preweddingProducts", 9, false, () => productObserver.reobserveCards(), preweddingShootProducts);
  productObserver.reobserveCards();

  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter)
    priceFilter.addEventListener("change", () => {
      renderByPagination("preweddingProducts", 9, false, () => productObserver.reobserveCards(), preweddingShootProducts);
      productObserver.reobserveCards();
    });
});

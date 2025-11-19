import { renderProducts } from "./script.js";
import { menProducts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(menProducts, "menProducts");

  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter)
    priceFilter.addEventListener("change", () =>
      renderProducts(menProducts, "menProducts")
    );
});

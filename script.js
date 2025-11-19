import { portal } from "./portal.js";
import { womenProducts } from "./data.js";

// Cart array - load from localStorage or new
let cart = JSON.parse(localStorage.getItem("cart")) || [];
window.cart = cart;
// Render women's products with optional filters
export function renderProducts(list = womenProducts, target = "products") {
  const container = document.getElementById(target);
  if (!container) return;

  const priceFilterEl = document.getElementById("priceFilter");
  const priceFilter = priceFilterEl ? priceFilterEl.value : "all";

  let filtered = list.slice();
  if (priceFilter !== "all") {
    switch (Number(priceFilter)) {
      case 1000:
        filtered = filtered.filter((p) => p.price < 1000);
        break;
      case 2000:
        filtered = filtered.filter((p) => p.price > 1000 && p.price < 2000);
        break;
      case 3000:
        filtered = filtered.filter((p) => p.price > 2000 && p.price < 3000);
        break;
      case 4000:
        filtered = filtered.filter((p) => p.price > 3000 && p.price < 4000);
        break;
      case 5000:
        filtered = filtered.filter((p) => p.price > 4000 && p.price < 5000);
        break;
      default:
        alert("please refresh the page");
        break;
    }
  }
  // if (priceFilter === "under9000") filtered = filtered.filter(p => p.price < 9000);
  // else if (priceFilter === "9000to10000") filtered = filtered.filter(p => p.price >= 9000 && p.price <= 10000);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="sno-items">No Items</div>`;
    return;
  }
  container.innerHTML = "";

  filtered.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.price = prod.price;

    const isItemInCart = cart.find((item) => item.id === prod.id)
      ? true
      : false;
    console.log(isItemInCart);

    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}" />
      <div class="content">
        <h3>${prod.name}</h3>
        <div class="price-row">
          <div>
            <div class="mrp"><s>Rs. ${prod.sPrice ? prod.sP.toLocaleString():6000}</s></div>
            <div class="price">Rs. ${prod.price.toLocaleString()}</div>
          </div>
          <div class="actions">
            <button class="add-cart-btn" ${
              isItemInCart ? "disabled" : ""
            } data-id="${prod.id}">${isItemInCart ? "Added" : "Add"}</button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Add product to cart by id (works for womenProducts and men page items)
function addToCart(id) {
  // Find product in womenProducts
  let product = womenProducts.find((p) => p.id === id);

  // If not found, try to read from DOM (men.html uses #menProducts)
  if (!product) {
    const card = document
      .querySelector(`#menProducts button[data-id=\"${id}\"]`)
      ?.closest(".product-card");
    if (card) {
      product = {
        id,
        name: card.querySelector("h3")?.innerText || "Item",
        price: parseInt(card.dataset.price) || 0,
        img: card.querySelector("img")?.src || "",
      };
    }
  }

  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });

  saveCart();
  updateCartDisplayCount();
  portal("Item added to cart");
  renderProducts(womenProducts, "products");
  renderProducts(menProducts, "menProducts");
  // window.location.href = "cart.html";
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Render cart items
function renderCartItems() {
  const cartItemsDiv = document.getElementById("cartItems");
  if (!cartItemsDiv) return;

  const emptyCart = document.getElementById("emptyCart");
  const cartContainer = document.querySelector(".cart-container");

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = "block";
    if (cartContainer) cartContainer.style.display = "none";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  if (cartContainer) cartContainer.style.display = "grid";

  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Rent: ₹${item.price.toLocaleString()}</p>
        <p>Quantity: ${item.qty}</p>
      </div>
      <button class="remove" data-index="${index}" title="Remove">×</button>
    `;
    cartItemsDiv.appendChild(div);
  });

  // Update summary
  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const totalItemsEl = document.getElementById("totalItems");
  const totalRentEl = document.getElementById("totalRent");
  const totalDepositEl = document.getElementById("totalDeposit");
  const totalAmountEl = document.getElementById("totalAmount");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalRent = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalDeposit = totalRent; // Assuming deposit equals rent
  const totalAmount = totalRent + totalDeposit;

  if (totalItemsEl) totalItemsEl.textContent = totalQty;
  if (totalRentEl) totalRentEl.textContent = `₹${totalRent.toLocaleString()}`;
  if (totalDepositEl)
    totalDepositEl.textContent = `₹${totalDeposit.toLocaleString()}`;
  if (totalAmountEl)
    totalAmountEl.textContent = `₹${totalAmount.toLocaleString()}`;
}

// Remove item from cart by index
function removeFromCartIndex(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  saveCart();
  renderCartItems();
  updateCartDisplayCount();
}

// Update cart display count
function updateCartDisplayCount() {
  const openBtn = document.getElementById("openCartBtn");
  const totalQty = cart.reduce((s, i) => s + (i.qty || 0), 0);
  if (openBtn) openBtn.textContent = `Cart (${totalQty})`;
}

function scrollToProducts() {
  const elem = document.getElementById("products");
  if (elem) elem.scrollIntoView({ behavior: "smooth" });
}

// WhatsApp checkout
function buyViaWhatsApp() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  let message = "Hello, I want to order:\n";
  cart.forEach(
    (i) => (message += `${i.name} - ₹${i.price.toLocaleString()} x ${i.qty}\n`)
  );
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  message += `Total Price: ₹${total.toLocaleString()}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Event delegation for add / remove / cart open / buy
document.addEventListener("click", function (e) {
  const add = e.target.closest && e.target.closest(".add-cart-btn");
  if (add) {
    const id = add.getAttribute("data-id");
    if (id) addToCart(id);
    return;
  }

  const rem = e.target.closest && e.target.closest(".remove");
  if (rem) {
    const idx = parseInt(rem.getAttribute("data-index"));
    removeFromCartIndex(idx);
    return;
  }

  if (e.target.matches("#buyBtn") || e.target.closest("#buyBtn")) {
    buyViaWhatsApp();
    return;
  }
  if (e.target.matches("#checkoutBtn") || e.target.closest("#checkoutBtn")) {
    buyViaWhatsApp();
    return;
  }
  if (e.target.matches(".hero-text button")) {
    scrollToProducts();
    return;
  }
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(womenProducts, "products");
  updateCartDisplayCount();
  renderCartItems();

  const priceFilter = document.getElementById("priceFilter");
  if (priceFilter)
    priceFilter.addEventListener("change", () =>
      renderProducts(womenProducts, "products")
    );
});

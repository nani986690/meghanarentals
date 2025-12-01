import { womenProducts, menProducts, preweddingShootProducts } from "./data.js"

export const createChunks = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

let paginationState = {
    prevBtn: null,
    nextBtn: null,
    paginationInfo: null,
    currentPage: 1,
    totalPages: 0,
    chunks: [],
    target: "",
    listenersAdded: false,
    observerCallback: null
};

function getPriceFilter() {
    const priceFilterEl = document.getElementById("priceFilter");
    return priceFilterEl ? priceFilterEl.value : "all";
}

function getNameFilter() {
    const nameFilterEl = document.getElementById("nameFilter");
    return nameFilterEl ? nameFilterEl.value : "all";
}

function applyNameFilter(products) {
    const nameFilter = getNameFilter();
    if (nameFilter === "all") return products;

    const filtered = products.slice().filter((p) => {
        const n = (p.name || "").toLowerCase();
        if (nameFilter === "prewedding") return /prew/i.test(n) || n.includes("prewedding");
        if (nameFilter === "meternity") return /meternit|materni|meternity|maternity/i.test(n);
        return true;
    });
    return filtered;
}

function applyPriceFilter(products) {
    const priceFilter = getPriceFilter();
    
    if (priceFilter === "all") return products;
    
    let filtered = products.slice();
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
            break;
    }
    return filtered;
}

export const renderByPagination = (target, count=9, isMen=false, observerCallback=null, customProducts=null) => {
    let products;
    if (customProducts) {
        products = customProducts;
    } else {
        products = isMen ? menProducts : womenProducts;
    }
    
    // Store observer callback for pagination clicks
    paginationState.observerCallback = observerCallback;
    
    // Apply name filter first, then price filter, then chunk
    const nameFiltered = applyNameFilter(products);
    const filteredProducts = applyPriceFilter(nameFiltered);
    const chunks = filteredProducts.length > 0 ? createChunks(filteredProducts, count) : [];
    
    // Update state first
    paginationState.chunks = chunks;
    paginationState.currentPage = 1;
    paginationState.totalPages = chunks.length || 1;
    paginationState.target = target;
    
    // Get pagination controls
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const paginationInfo = document.querySelector('.pagination-info');
    
    paginationState.prevBtn = prevBtn;
    paginationState.nextBtn = nextBtn;
    paginationState.paginationInfo = paginationInfo;
    
    // Update UI first to show correct page info
    updatePaginationUI();
    
    // Handle empty results
    if (chunks.length === 0) {
        const container = document.getElementById(target);
        if (container) {
            container.innerHTML = `<div class="sno-items">No Items</div>`;
        }
        return;
    }
    
    // Render initial products
    renderChunk(0);
    
    // Add event listeners only once
    if (!paginationState.listenersAdded && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', handlePrevClick);
        nextBtn.addEventListener('click', handleNextClick);
        paginationState.listenersAdded = true;
    }
};

function updatePaginationUI() {
    if (paginationState.paginationInfo) {
        paginationState.paginationInfo.textContent = `${paginationState.currentPage} / ${paginationState.totalPages}`;
    }
    
    if (paginationState.prevBtn) {
        paginationState.prevBtn.disabled = paginationState.currentPage === 1;
    }
    
    if (paginationState.nextBtn) {
        paginationState.nextBtn.disabled = paginationState.currentPage === paginationState.totalPages;
    }
}

function renderChunk(chunkIndex) {
    const target = paginationState.target;
    const chunk = paginationState.chunks[chunkIndex];
    const container = document.getElementById(target);
    
    if (!container || !chunk) return;
    
    container.innerHTML = "";
    chunk.forEach((prod) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.dataset.price = prod.price;

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isItemInCart = cart.find((item) => item.id === prod.id) ? true : false;

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

function handlePrevClick() {
    if (paginationState.currentPage > 1) {
        paginationState.currentPage--;
        renderChunk(paginationState.currentPage - 1);
        updatePaginationUI();
        
        // Trigger observer callback if provided
        if (paginationState.observerCallback) {
            paginationState.observerCallback();
        }
        
        window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'smooth' });
    }
}

function handleNextClick() {
    if (paginationState.currentPage < paginationState.totalPages) {
        paginationState.currentPage++;
        renderChunk(paginationState.currentPage - 1);
        updatePaginationUI();
        
        // Trigger observer callback if provided
        if (paginationState.observerCallback) {
            paginationState.observerCallback();
        }
        
        window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'smooth' });
    }
}
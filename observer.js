// Intersection Observer for tracking product cards in viewport
export const initProductObserver = () => {
    // Configuration for the observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of card is visible
    };

    // Callback function when cards enter/leave viewport
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                
                // Add animation class
                card.classList.add('card-visible');
                
                const productName = card.querySelector('h3')?.textContent || 'Unknown';
                const productPrice = card.dataset.price || 'N/A';
                const productId = card.querySelector('[data-id]')?.dataset.id || 'N/A';

                console.log(`🎯 Product Viewed:`, {
                    name: productName,
                    price: `Rs. ${productPrice}`,
                    id: productId,
                    timestamp: new Date().toLocaleTimeString()
                });

                // Optional: Add a visual indicator
                card.classList.add('viewed');
            } else {
                // keep the 'card-visible' class once added so animation remains
                // do not remove the class when the card leaves the viewport
            }
        });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Function to start observing cards
    const observeCards = () => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card) => {
            observer.observe(card);
        });
    };

    // Function to reset observer (useful when pagination changes)
    const resetObserver = () => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card) => {
            observer.unobserve(card);
            card.classList.remove('card-visible');
        });
    };

    // Re-observe cards when pagination changes
    const reobserveCards = () => {
        resetObserver();
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            observeCards();
        }, 100);
    };

    // Initial observation
    observeCards();

    return {
        observeCards,
        resetObserver,
        reobserveCards
    };
};

// Alternative version with more detailed tracking
export const initAdvancedProductObserver = () => {
    const viewedProducts = new Set();

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visibility
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            const card = entry.target;
            const productId = card.querySelector('[data-id]')?.dataset.id;

            if (entry.isIntersecting) {
                // Add animation class
                card.classList.add('card-visible');

                if (!viewedProducts.has(productId)) {
                    viewedProducts.add(productId);

                    const productName = card.querySelector('h3')?.textContent;
                    const productPrice = card.dataset.price;
                    const productImg = card.querySelector('img')?.src;

                    console.log(`✨ New Product Viewed:`, {
                        id: productId,
                        name: productName,
                        price: `Rs. ${productPrice}`,
                        image: productImg,
                        viewedAt: new Date().toLocaleTimeString(),
                        totalViewed: viewedProducts.size
                    });

                    card.classList.add('viewed');
                }
            } else {
                // keep 'card-visible' once it's added — don't remove on exit
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeCards = () => {
        document.querySelectorAll('.product-card').forEach((card) => {
            observer.observe(card);
        });
    };

    const resetObserver = () => {
        document.querySelectorAll('.product-card').forEach((card) => {
            observer.unobserve(card);
            card.classList.remove('card-visible');
        });
        viewedProducts.clear();
    };

    const reobserveCards = () => {
        resetObserver();
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            observeCards();
        }, 100);
    };

    const getViewedProducts = () => Array.from(viewedProducts);

    observeCards();

    return {
        observeCards,
        resetObserver,
        reobserveCards,
        getViewedProducts,
        viewedProducts
    };
};

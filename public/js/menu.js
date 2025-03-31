$(document).ready(() => {
    async function fetchAndDisplayProducts() {
        try {
            const response = await fetch('/get_produit'); // Fetch product data
            const data = await response.json();

            if (!response.ok) throw new Error('Failed to load products');
            data.data.forEach(product => {
                $(`#${product.category}`).append(`
                    
                <div class="card-menu">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <div class="alegreya">
                        <P>${product.name}</P>
                        <p>$${product.price}</p>
                    </div>
                </div>
            `);
            });

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // Call function on page load
    fetchAndDisplayProducts();
})
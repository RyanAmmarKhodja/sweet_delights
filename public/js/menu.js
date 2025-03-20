$(document).ready(() => {
    async function fetchAndDisplayProducts() {
        try {
            const response = await fetch('/get_produit'); // Fetch product data
            const data = await response.json();

            if (!response.ok) throw new Error('Failed to load products');
            data.data.forEach(product => {
                $(`#${product.category}`).append(`
                    

                <div class="card-menu">
                    <img src="${product.imageUrl}" alt="${product.name}" style="width:100%;padding: 1em;">
                    <div class="cinzel" style="padding: 2px 16px; text-align: center;">
                        <P>${product.name}</P>
                        <p>${product.price}$</p>
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
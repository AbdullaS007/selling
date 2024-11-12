// Sample product data
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        image: "images.jpg",
        description: "This is product 1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 29.99,
        image: "download.jpg",
        description: "This is product 2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 39.99,
        image: "download (4).jpg",
        description: "This is product 3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 39.99,
        image: "download (3).jpg",
        description: "This is product 4"
    },
    {
        id: 5,
        name: "Product 5",
        price: 39.99,
        image: "download (2).jpg",
        description: "This is product 5"
    },
    {
        id: 6,
        name: "Product 6",
        price: 39.99,
        image: "download (1).jpg",
        description: "This is product 6"
    },
    {
        id: 7,
        name: "Product 7",
        price: 39.99,
        image: "images (1).jpg",
        description: "This is product 7"
    },
    {
        id: 8,
        name: "Product 8",
        price: 39.99,
        image: "images (2).jpg",
        description: "This is product 8"
    },
    {
        id: 9,
        name: "Product 9",
        price: 39.99,
        image: "images (3).jpg",
        description: "This is product 9"
    },
    {
        id: 10,
        name: "Product 10",
        price: 25.99,
        image: "images (4).jpg",
        description: "This is product 10"
    },
    {
        id: 11,
        name: "Product 11",
        price: 40.50,
        image: "images (5).jpg",
        description: "This is product 11"
    },
    {
        id: 12,
        name: "Product 12",
        price: 39.99,
        image: "images (6).jpg",
        description: "This is product 12"
    },
    {
        id: 13,
        name: "Product 13",
        price: 31.75,
        image: "images (7).jpg",
        description: "This is product 13"
    },
    {
        id: 14,
        name: "Product 14",
        price: 29.99,
        image: "images (8).jpg",
        description: "This is product 14"
    },
    {
        id: 15,
        name: "Product 15",
        price: 40.80,
        image: "images (9).jpg",
        description: "This is product 15"
    }
];

// Generate product cards dynamically
const productGrid = document.querySelector(".product-grid");

products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const html = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <p>${product.description}</p>
    `;

    productCard.innerHTML = html;
    productGrid.appendChild(productCard);
});
// Datos de productos
const clothingProducts = [
    {
        id: 1,
        name: "Camiseta Blanca Clásica",
        price: 24.99,
        image: "BATMAN.png",
        category: "shirts",
        description: "Camiseta básica de algodón 100%, perfecta para cualquier ocasión. Disponible en varios tamaños."
    },
    {
        id: 2,
        name: "Jeans Slim Fit",
        price: 49.99,
        image: "Img4.jpg",
        category: "pants",
        description: "Jeans ajustados de alta calidad con elasticidad para mayor comodidad. Perfecto para uso diario."
    },
    {
        id: 3,
        name: "Vestido Floral de Verano",
        price: 59.99,
        image: "SUPERMAN.png",
        category: "dresses",
        description: "Vestido ligero con estampado floral, ideal para los días cálidos de verano. Tejido transpirable."
    },
    {
        id: 4,
        name: "Cinturón de Cuero",
        price: 29.99,
        image: "Medio3.jpg",
        category: "accessories",
        description: "Cinturón de cuero genuino con hebilla metálica duradera. Un complemento esencial para tu guardarropa."
    },
    {
        id: 5,
        name: "Camisa Casual",
        price: 34.99,
        image: "https://via.placeholder.com/300x400",
        category: "shirts",
        description: "Camisa versátil para ocasiones informales o semi-formales. Corte cómodo y tejido de calidad."
    },
    {
        id: 6,
        name: "Vestido de Noche Elegante",
        price: 89.99,
        image: "https://via.placeholder.com/300x400",
        category: "dresses",
        description: "Vestido elegante para eventos especiales. Diseño sofisticado con detalles cuidadosamente elaborados."
    },
    {
        id: 7,
        name: "Pantalones Cargo",
        price: 54.99,
        image: "https://via.placeholder.com/300x400",
        category: "pants",
        description: "Pantalones cargo resistentes con múltiples bolsillos. Perfectos para actividades al aire libre."
    },
    {
        id: 8,
        name: "Collar de Plata",
        price: 39.99,
        image: "https://via.placeholder.com/300x400",
        category: "accessories",
        description: "Collar de plata de ley con diseño minimalista. Una pieza atemporal para cualquier conjunto."
    }
];

const importProducts = [
    {
        id: 101,
        name: "Auriculares Inalámbricos",
        price: 79.99,
        image: "https://via.placeholder.com/300x400",
        category: "electronics",
        description: "Auriculares con tecnología Bluetooth 5.0, cancelación de ruido y hasta 20 horas de batería."
    },
    {
        id: 102,
        name: "Crema Facial de Lujo",
        price: 65.99,
        image: "https://via.placeholder.com/300x400",
        category: "beauty",
        description: "Crema hidratante premium con ingredientes naturales que rejuvenecen y nutren la piel."
    },
    {
        id: 103,
        name: "Altavoz Inteligente",
        price: 129.99,
        image: "https://via.placeholder.com/300x400",
        category: "electronics",
        description: "Altavoz con asistente virtual integrado, sonido envolvente y conectividad multi-dispositivo."
    },
    {
        id: 104,
        name: "Cojines Decorativos",
        price: 45.99,
        image: "https://via.placeholder.com/300x400",
        category: "home",
        description: "Set de cojines decorativos con diseños contemporáneos. Añade estilo y comodidad a tu hogar."
    },
    {
        id: 105,
        name: "Cafetera Premium",
        price: 199.99,
        image: "https://via.placeholder.com/300x400",
        category: "home",
        description: "Cafetera de última generación con múltiples opciones de preparación y sistema de autolimpieza."
    },
    {
        id: 106,
        name: "Set de Perfumes Importados",
        price: 89.99,
        image: "https://via.placeholder.com/300x400",
        category: "beauty",
        description: "Colección de fragancias exclusivas de reconocidas marcas internacionales."
    },
    {
        id: 107,
        name: "Pulsera de Actividad",
        price: 59.99,
        image: "https://via.placeholder.com/300x400",
        category: "electronics",
        description: "Dispositivo para monitorear tu actividad física, sueño y notificaciones en tiempo real."
    },
    {
        id: 108,
        name: "Caja de Chocolates Artesanales",
        price: 34.99,
        image: "https://via.placeholder.com/300x400",
        category: "others",
        description: "Chocolates gourmet elaborados con cacao de origen y técnicas artesanales tradicionales."
    }
];

// Función para crear tarjeta de producto
function createProductCard(product, type) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const formattedPrice = product.price.toFixed(2);
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${formattedPrice}</p>
            <p class="product-category">Categoría: ${categoryName}</p>
            <div class="product-buttons">
                <button class="info-button" onclick="showProductInfo(${product.id}, '${type}')">
                    <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/>
                    </svg>
                    Información
                </button>
                <button class="whatsapp-button" onclick="contactViaWhatsApp('${product.name}', ${product.price}, '${type}')">
                    <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Contactar por WhatsApp
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Función para contactar por WhatsApp
function contactViaWhatsApp(productName, productPrice, type) {
    const typeText = type === 'clothing' ? 'Ropa' : 'Importación';
    const message = `Estoy interesado en este producto: ${productName} - $${productPrice.toFixed(2)} (${typeText})`;
    const encodedMessage = encodeURIComponent(message);
    // Reemplaza con tu número de WhatsApp real
    window.open(`https://wa.me/963532407?text=${encodedMessage}`, '_blank');
}

// Función para mostrar información del producto en modal
function showProductInfo(productId, type) {
    // Encontrar el producto por ID
    const products = type === 'clothing' ? clothingProducts : importProducts;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Crear el modal si no existe
    let modal = document.getElementById('product-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'product-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modal-product-info"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Agregar evento para cerrar el modal
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        });
        
        // Cerrar modal al hacer clic fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    // Actualizar contenido del modal
    const modalContent = document.getElementById('modal-product-info');
    const typeText = type === 'clothing' ? 'Ropa' : 'Importación';
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-details">
                <h2>${product.name}</h2>
                <p class="modal-product-price">$${product.price.toFixed(2)}</p>
                <p><strong>Categoría:</strong> ${categoryName}</p>
                <p><strong>Tipo:</strong> ${typeText}</p>
                <p><strong>ID del producto:</strong> ${product.id}</p>
                <div class="modal-product-description">
                    <h3>Descripción:</h3>
                    <p>${product.description}</p>
                </div>
                <button class="whatsapp-button modal-whatsapp" onclick="contactViaWhatsApp('${product.name}', ${product.price}, '${type}')">
                    <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Contactar por WhatsApp
                </button>
            </div>
        </div>
    `;
    
    // Mostrar el modal con animación
    setTimeout(() => {
        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }, 10);
}

// Función para mostrar productos filtrados
function showProducts(products, containerId, type, category = 'all') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product, type);
        container.appendChild(card);
    });
}

// Inicializar productos
document.addEventListener('DOMContentLoaded', () => {
    showProducts(clothingProducts, 'clothing-products', 'clothing');
    showProducts(importProducts, 'imports-products', 'imports');
    
    // Manejar escape key para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('product-modal');
            if (modal && modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        }
    });
});

// Manejar cambios de pestaña
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Actualizar botones de pestaña
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Actualizar contenido de pestaña
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Manejar filtrado por categoría
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const categoryType = button.parentElement.id.split('-')[0]; // clothing o imports
        const category = button.dataset.category;
        
        // Actualizar botones de categoría
        document.querySelectorAll(`#${categoryType}-categories .category-button`).forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Mostrar productos filtrados
        if (categoryType === 'clothing') {
            showProducts(clothingProducts, 'clothing-products', 'clothing', category);
        } else {
            showProducts(importProducts, 'imports-products', 'imports', category);
        }
    });
});

// Exponer funciones al ámbito global
window.contactViaWhatsApp = contactViaWhatsApp;
window.showProductInfo = showProductInfo;
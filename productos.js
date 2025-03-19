document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            imagen: "im/planta1.png",
            nombre: "Cactus Mini",
            descripcion: "Ideal para decoración en interiores.",
            precio: 150
        },
        {
            imagen: "im/planta2.jpg",
            nombre: "Bonsái Ficus",
            descripcion: "Un bonsái elegante para tu hogar.",
            precio: 1200
        },
        {
            imagen: "im/herramienta1.jpg",
            nombre: "Tijeras de podar",
            descripcion: "Corte preciso para tus plantas.",
            precio: 300
        },
        {
            imagen: "im/maceta1.jpg",
            nombre: "Maceta de barro",
            descripcion: "Perfecta para plantas medianas.",
            precio: 250
        }
    ];

    let contenedor = document.getElementById('productos-container');

    productos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
        `;
        contenedor.appendChild(div);
    });
});

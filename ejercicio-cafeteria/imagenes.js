const productos = document.querySelectorAll(".producto button");
const carritoBody = document.querySelector("tbody");

let carrito = [];

productos.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const producto = e.target.closest(".producto");

    const nombre = producto.dataset.nombre;
    const precio = parseFloat(producto.dataset.precio);

    agregarAlCarrito(nombre, precio);
  });
});
function agregarAlCarrito(nombre, precio) {
  const existe = carrito.find(p => p.nombre === nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({
      nombre,
      precio,
      cantidad: 1
    });
  }

  renderCarrito();
}
function renderCarrito() {
  carritoBody.innerHTML = "";

  let total = 0;

  if (carrito.length === 0) {
    carritoBody.innerHTML = `
      <tr>
        <td colspan="5">Carrito vacío - comience a comprar!</td>
      </tr>
    `;
    document.getElementById("totalGeneral").textContent = "Total: $0";
    return;
  }

  carrito.forEach((prod, index) => {
    const subtotal = prod.precio * prod.cantidad;
    total += subtotal;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${prod.nombre}</td>
      <td>${prod.cantidad}</td>
      <td>
        <button onclick="eliminarProducto(${index})">🗑️</button>
      </td>
      <td>$ ${subtotal}</td>
    `;

    carritoBody.appendChild(tr);
  });

  document.getElementById("totalGeneral").textContent = "Total: $" + total;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  renderCarrito();
}
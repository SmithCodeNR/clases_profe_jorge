const btnAgregar = document.getElementById("btnAgregar");
const tablaBody = document.querySelector("#tabla tbody");
const totalGeneral = document.getElementById("totalGeneral");
const imagenes = {
    tomate:"img1.jpg",
    papasfritas:"img2.webp",
    cebolla:"img3.png",
    lechuga:"img4.jpg",
    maracuya:"img5.webp",
    lulo:"img6.jpg",
    yuca:"img7.avif",
    ajo:"img8.jpg",
    papacriolla:"img9.jpg",
    manzanaverde:"img10.jpg",
    naranja:"img11.avif",
    manzanaroja:"img12.jpg",
    sandia:"img13.webp",
    banano:"img14.webp",
    mora:"img15.jpg",
    fresa:"img16.jpg",
    arandano:"img17.jpg",
    papaya:"img18.jpg",
    platanoverde:"img19.png",
    pera:"img20.jpg",
    piña:"img21.webp"
};

const selectProducto = document.getElementById("nombre");
const imgProducto = document.getElementById("imgProducto");

function actualizarImagen() {
  imgProducto.src = imagenes[selectProducto.value];
}

selectProducto.addEventListener("change", actualizarImagen);

// Mostrar la imagen del primer producto al cargar
actualizarImagen();

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos.");
    return;
  }

  agregarProducto(nombre, cantidad, precio);
  limpiar();
});

function agregarProducto(nombre, cantidad, precio) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
            <td>${nombre}</td>

            <td>
                <button class="menos">–</button>
                <span class="cant">${cantidad}</span>
                <button class="mas">+</button>
            </td>

            <td>
                $<span class="precio">${precio}</span>
                <button class="editarPrecio">✏️</button>
            </td>

            <td>$<span class="total">${(cantidad * precio).toFixed(
              2
            )}</span></td>

            <td><button class="eliminar">🗑️</button></td>
        `;

  tablaBody.appendChild(tr);
  recalcularTotal();
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}

tablaBody.addEventListener("click", function (e) {
  const fila = e.target.closest("tr");

  if (e.target.classList.contains("mas")) {
    let cant = fila.querySelector(".cant");
    cant.textContent = parseInt(cant.textContent) + 1;
  }

  if (e.target.classList.contains("menos")) {
    let cant = fila.querySelector(".cant");
    let actual = parseInt(cant.textContent);
    if (actual > 0) cant.textContent = actual - 1;
  }

  if (e.target.classList.contains("editarPrecio")) {
    let precioSpan = fila.querySelector(".precio");
    const nuevo = prompt("Nuevo precio:", precioSpan.textContent);
    if (nuevo !== null && !isNaN(parseFloat(nuevo))) {
      precioSpan.textContent = parseFloat(nuevo);
    }
  }

  if (e.target.classList.contains("eliminar")) {
    fila.remove();
  }

  actualizarFila(fila);
  recalcularTotal();
});

function actualizarFila(fila) {
  const cant = parseInt(fila.querySelector(".cant").textContent);
  const precio = parseFloat(fila.querySelector(".precio").textContent);

  const total = fila.querySelector(".total");
  total.textContent = (cant * precio).toFixed(2);

  if (cant === 0) {
    fila.classList.add("low-stock");
  } else {
    fila.classList.remove("low-stock");
  }
}

function recalcularTotal() {
  let suma = 0;

  const totales = document.querySelectorAll("#tabla tbody .total");

  totales.forEach((t) => {
    const valor = parseFloat(t.textContent);
    if (!isNaN(valor)) {
      suma += valor;
    }
  });

  totalGeneral.textContent = "Total general: $" + suma.toFixed(2);
}
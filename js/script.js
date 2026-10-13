/* ============================================================
   CLICK & BUY STORE — SCRIPT PRINCIPAL
   ------------------------------------------------------------
   ETAPA 1: estructura, cambio de vistas.
   ETAPA 2: catálogo, chips, buscador, filtros, orden.
   ETAPA 3: panel del producto (blur, slider, info).
   ETAPA 4: carrito de compras con localStorage.
   ETAPA 5: modal de pedido + WhatsApp.
   ETAPA 6 (Bloque D): vaciar carrito, toast, manejo de errores.
   ============================================================ */


/* ============================================================
   0. UTILIDADES
   ============================================================ */
const $  = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const CLAVE_CARRITO = 'clickandbuy_carrito';


/* ============================================================
   1. CATÁLOGO DE PRODUCTOS
   ------------------------------------------------------------
   PARA AGREGAR UN PRODUCTO:
   1. Copiá un bloque { ... } completo.
   2. Pegalo debajo del último.
   3. Cambiá los datos.
   4. Asegurate de que el último campo NO tenga coma.
   ============================================================ */

const productos = [

  /* ----------------------------------------------------------
     DECORACIÓN → CUADROS
     ---------------------------------------------------------- */
  {
    id: "modernart-10x15",
    nombre: "ModernArt 10x15",
    precio: 7000,
    categoria: "decoracion",
    subcategoria: "cuadros",
    descripcion: "Cuadro decorativo de estilo moderno en formato compacto. Ideal para escritorios, repisas o pequeños espacios. Su terminación en madera forrada aporta un toque cálido y elegante a cualquier ambiente.",
    imagenes: [
      "img/decoracion/cuadros/modernart-10x15-01.jpg",
      "img/decoracion/cuadros/modernart-10x15-02.jpg",
      "img/decoracion/cuadros/modernart-10x15-03.jpg"
    ],
    especificaciones: {
      "Medida": "10 cm de ancho × 15 cm de alto",
      "Material": "Madera forrada",
      "Marco": "Madera forrada",
      "Orientación": "Vertical"
    }
  },

  {
    id: "modernart-20x30",
    nombre: "ModernArt 20x30",
    precio: 12000,
    categoria: "decoracion",
    subcategoria: "cuadros",
    descripcion: "Cuadro decorativo de estilo moderno en formato mediano. Perfecto para paredes de living, dormitorio o pasillo. Su marco de madera clara resalta la obra y combina con distintos estilos de decoración.",
    imagenes: [
      "img/decoracion/cuadros/modernart-20x30-01.jpg",
      "img/decoracion/cuadros/modernart-20x30-02.jpg",
      "img/decoracion/cuadros/modernart-20x30-03.jpg"
    ],
    especificaciones: {
      "Medida": "20 cm de ancho × 30 cm de alto",
      "Material": "Madera clara",
      "Marco": "Madera clara",
      "Orientación": "Vertical"
    }
  },

  /* ----------------------------------------------------------
     DECORACIÓN → POSTERS
     ---------------------------------------------------------- */
  {
    id: "poster-reflejo-carmesi",
    nombre: "Póster Reflejo Carmesí",
    precio: 20000,
    categoria: "decoracion",
    subcategoria: "posters",
    descripcion: "Póster decorativo de gran formato impreso sobre tela. Se adhiere fácilmente a la pared sin necesidad de marco. Ideal para darle personalidad a cuartos claros, oficinas o espacios de estudio.",
    imagenes: [
      "img/decoracion/posters/poster-reflejo-carmesi-01.jpg"
    ],
    especificaciones: {
      "Medida": "60 cm de alto × 40 cm de ancho",
      "Material": "Tela",
      "Marco": "Sin marco",
      "Instalación": "Pegable a la pared"
    }
  },

  {
    id: "poster-carmesi",
    nombre: "Póster Carmesí",
    precio: 20000,
    categoria: "decoracion",
    subcategoria: "posters",
    descripcion: "Póster decorativo de gran formato impreso sobre tela. Se adhiere fácilmente a la pared sin necesidad de marco. Ideal para darle personalidad a cuartos claros, oficinas o espacios de estudio.",
    imagenes: [
      "img/decoracion/posters/poster-carmesi-01.jpg"
    ],
    especificaciones: {
      "Medida": "60 cm de alto × 40 cm de ancho",
      "Material": "Tela",
      "Marco": "Sin marco",
      "Instalación": "Pegable a la pared"
    }
  },

  {
    id: "poster-santuario-carmesi",
    nombre: "Póster Santuario Carmesí",
    precio: 20000,
    categoria: "decoracion",
    subcategoria: "posters",
    descripcion: "Póster decorativo de gran formato impreso sobre tela. Se adhiere fácilmente a la pared sin necesidad de marco. Ideal para darle personalidad a cuartos claros, oficinas o espacios de estudio.",
    imagenes: [
      "img/decoracion/posters/poster-santuario-carmesi-01.jpg"
    ],
    especificaciones: {
      "Medida": "60 cm de alto x 40 cm de ancho",
      "Material": "Tela",
      "Marco": "Sin marco",
      "Instalación": "Pegable a la pared"
    }
  },

  /* ----------------------------------------------------------
     ELECTRÓNICA → AURICULARES
     ---------------------------------------------------------- */
  {
    id: "f9-5-tws",
    nombre: "F9-5 Auriculares Inalámbricos TWS",
    precio: 15000,
    categoria: "electronica",
    subcategoria: "auriculares",
    descripcion: "Auriculares in-ear inalámbricos TWS con estuche de carga con pantalla LED digital e indicador de batería. Ofrecen sonido estéreo, resistencia IPX5/IPX7 al agua o sudor y función de power bank de emergencia para cargar otros dispositivos.",
    imagenes: [
      "img/electronica/auriculares/f9-5-tws-01.jpg",
      "img/electronica/auriculares/f9-5-tws-02.jpg",
      "img/electronica/auriculares/f9-5-tws-03.jpg",
      "img/electronica/auriculares/f9-5-tws-04.jpg"
    ],
    especificaciones: {
      "Marca": "Genérico",
      "Modelo": "F9-5",
      "Tipo": "Inalámbrico (In-ear / TWS)",
      "Conexión": "Bluetooth 5.0",
      "Batería": "3 a 5 horas de reproducción continua (hasta 20 horas con el estuche)",
      "Micrófono": "Sí, integrado con soporte para llamadas manos libres",
      "Cancelación de ruido": "Sí, aislamiento de ruido ambiental CVC para llamadas",
      "Compatibilidad": "Celulares (Android e iOS), tablets, PC, notebooks, consolas y cualquier dispositivo con Bluetooth",
      "Color": "Negro"
    }
  },

  {
    id: "havit-stn-28",
    nombre: "Havit STN-28 Wireless Cat Headset",
    precio: 30000,
    categoria: "electronica",
    subcategoria: "auriculares",
    descripcion: "Auriculares inalámbricos tipo vincha plegable con llamativo diseño de orejitas de gato con luces LED RGB cambiantes. Incorporan reproducción mediante Bluetooth, tarjeta Micro SD y cable auxiliar 3.5mm, ofreciendo un sonido envolvente con un diseño divertido e ideal para streaming o uso diario.",
    imagenes: [
      "img/electronica/auriculares/havit-stn-28-01.jpg",
      "img/electronica/auriculares/havit-stn-28-02.jpg",
      "img/electronica/auriculares/havit-stn-28-03.jpg",
      "img/electronica/auriculares/havit-stn-28-04.jpg",
      "img/electronica/auriculares/havit-stn-28-05.jpg"
    ],
    especificaciones: {
      "Marca": "Havit / STN-28",
      "Modelo": "STN-28 Cat Headset",
      "Tipo": "Inalámbrico tipo vincha",
      "Conexión": "Bluetooth 5.0 / Jack 3.5mm / Micro SD",
      "Batería": "400 mAh (hasta 8-10 horas de reproducción continua)",
      "Micrófono": "Sí, incorporado para llamadas manos libres",
      "Cancelación de ruido": "No (aislamiento pasivo por almohadillas)",
      "Compatibilidad": "Celular, PC, laptop, tablet, Smart TV y consolas",
      "Color": "Lila"
    }
  },

  {
    id: "havit-hv-h2232d",
    nombre: "Havit HV-H2232D Gaming Headset",
    precio: 52000,
    categoria: "electronica",
    subcategoria: "auriculares",
    descripcion: "Auriculares gamer de vincha ajustables con altavoces de 50 mm para sonido envolvente y claro. Cuentan con iluminación LED RGB fluida en los laterales, micrófono con cancelación de ruido y almohadillas suaves para uso prolongado.",
    imagenes: [
      "img/electronica/auriculares/havit-hv-h2232d-01.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-02.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-03.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-04.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-05.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-06.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-07.jpg",
      "img/electronica/auriculares/havit-hv-h2232d-08.jpg"
    ],
    especificaciones: {
      "Marca": "Havit (Gamenote)",
      "Modelo": "HV-H2232D",
      "Tipo": "Con cable / Gamer (Over-Ear con RGB)",
      "Conexión": "Jack 3.5mm + USB (para iluminación RGB)",
      "Batería": "No aplica (con cable)",
      "Micrófono": "Sí, flexible omnidireccional con rotación de 360°",
      "Cancelación de ruido": "Sí, reducción de ruido en el micrófono",
      "Compatibilidad": "PC, PS4, PS5, Xbox One/Series X|S, Nintendo Switch, notebooks y celulares",
      "Color": "Blanco"
    }
  }

];


/* ============================================================
   2. ESTADO GLOBAL
   ============================================================ */
const estado = {
  productos: productos,
  carrito: [],
  categoriaActual: null,
  subcategoriaActual: null,
  busqueda: '',
  orden: 'relevancia',
  productoActual: null,
  indiceImagen: 0
};


/* ============================================================
   3. REFERENCIAS A ELEMENTOS DEL HTML
   ============================================================ */
const elementos = {
  menuBotones:      $$('.cabecera__menu-boton'),
  buscador:         $('#buscador'),
  botonCarrito:     $('#botonCarrito'),
  contadorCarrito:  $('#contadorCarrito'),
  botonExplorar:    $('#botonExplorar'),
  vistas: {
    inicio:       $('#vistaInicio'),
    categoria:    $('#vistaCategoria'),
    proximamente: $('#vistaProximamente')
  },
  tituloCategoria:  $('#tituloCategoria'),
  chipsSubcategorias: $('#chipsSubcategorias'),
  grillaProductos:  $('#grillaProductos'),
  categoriaVacio:   $('#categoriaVacio'),
  ordenProductos:   $('#ordenProductos'),
  panelProducto:    $('#panelProducto'),
  anioActual:       $('#anioActual'),

  // Panel del producto
  panelFondo:            $('#panelFondo'),
  cerrarPanelProducto:   $('#cerrarPanelProducto'),
  ppSliderImagen:        $('#ppSliderImagen'),
  ppFlechaIzq:           $('#ppFlechaIzq'),
  ppFlechaDer:           $('#ppFlechaDer'),
  ppSliderContador:      $('#ppSliderContador'),
  ppSliderMiniaturas:    $('#ppSliderMiniaturas'),
  ppSubcategoria:        $('#ppSubcategoria'),
  ppNombre:              $('#ppNombre'),
  ppPrecio:              $('#ppPrecio'),
  ppDescripcion:         $('#ppDescripcion'),
  ppListaEspecificaciones: $('#ppListaEspecificaciones'),
  ppBotonAgregar:        $('#ppBotonAgregar'),

  // Carrito
  panelCarrito:          $('#panelCarrito'),
  carritoOverlay:        $('#carritoOverlay'),
  cerrarPanelCarrito:    $('#cerrarPanelCarrito'),
  carritoContenido:      $('#carritoContenido'),
  carritoFooter:         $('#carritoFooter'),
  carritoTotal:          $('#carritoTotal'),
  botonFinalizarCompra:  $('#botonFinalizarCompra'),
  botonVaciarCarrito:    $('#botonVaciarCarrito'),

  // Modal de pedido
  modalPedido:           $('#modalPedido'),
  pasoFormulario:        $('#pasoFormulario'),
  pasoPreview:           $('#pasoPreview'),
  formPedido:            $('#formPedido'),
  pedidoNombre:          $('#pedidoNombre'),
  pedidoLocalidad:       $('#pedidoLocalidad'),
  pedidoEncuentro:       $('#pedidoEncuentro'),
  pedidoComentarios:     $('#pedidoComentarios'),
  formPedidoError:       $('#formPedidoError'),
  previewMensaje:        $('#previewMensaje'),
  volverFormulario:      $('#volverFormulario'),
  botonMandarWhatsapp:   $('#botonMandarWhatsapp'),
  opcionesWhatsapp:      $('#opcionesWhatsapp'),

  // Toast
  toast:                 $('#toast'),
  toastTexto:            $('#toastTexto')
};


/* ============================================================
   4. INICIALIZACIÓN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  actualizarAnio();
  cargarCarritoDeStorage();
  actualizarContadorCarrito();
  activarMenu();
  activarBotonExplorar();
  activarBuscador();
  activarOrden();
  activarPanelProducto();
  activarCarrito();
  activarModalPedido();
  activarManejoErroresImagenes();
});


/* ============================================================
   5. CAMBIO DE VISTAS
   ============================================================ */
function mostrarVista(nombreVista) {
  Object.values(elementos.vistas).forEach((vista) => {
    if (vista) vista.classList.remove('vista--activa');
  });

  const vistaDestino = elementos.vistas[nombreVista];
  if (vistaDestino) {
    vistaDestino.classList.add('vista--activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


/* ============================================================
   6. MENÚ DE CATEGORÍAS
   ============================================================ */
function activarMenu() {
  elementos.menuBotones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.vista;

      estado.busqueda = '';
      if (elementos.buscador) elementos.buscador.value = '';

      elementos.menuBotones.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');

      if (categoria === 'inicio') {
        estado.categoriaActual = null;
        estado.subcategoriaActual = null;
        mostrarVista('inicio');
      } else if (categoria === 'ropa' || categoria === 'accesorios') {
        mostrarVista('proximamente');
        $('#tituloProximamente').textContent = 'Próximamente...';
      } else if (categoria === 'novedades') {
        estado.categoriaActual = null;
        estado.subcategoriaActual = null;
        mostrarVista('inicio');
        setTimeout(() => {
          $('#seccionNovedades')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        estado.categoriaActual = categoria;
        estado.subcategoriaActual = null;
        mostrarVista('categoria');
        renderizarCategoria();
      }
    });
  });
}


/* ============================================================
   7. RENDERIZADO DE LA CATEGORÍA
   ============================================================ */
function renderizarCategoria() {
  const categoria = estado.categoriaActual;
  if (!categoria) return;

  const titulo = categoria.charAt(0).toUpperCase() + categoria.slice(1);
  elementos.tituloCategoria.textContent = titulo;

  const subcats = [...new Set(
    estado.productos
      .filter(p => p.categoria === categoria)
      .map(p => p.subcategoria)
  )];

  elementos.chipsSubcategorias.innerHTML = '';

  const chipTodos = document.createElement('button');
  chipTodos.className = 'chip' + (estado.subcategoriaActual === null ? ' activo' : '');
  chipTodos.textContent = 'Todos';
  chipTodos.addEventListener('click', () => {
    estado.subcategoriaActual = null;
    renderizarCategoria();
  });
  elementos.chipsSubcategorias.appendChild(chipTodos);

  subcats.forEach(sub => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (estado.subcategoriaActual === sub ? ' activo' : '');
    chip.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
    chip.addEventListener('click', () => {
      estado.subcategoriaActual = sub;
      renderizarCategoria();
    });
    elementos.chipsSubcategorias.appendChild(chip);
  });

  const productosFiltrados = obtenerProductosFiltrados(categoria);
  renderizarGrilla(productosFiltrados);
}


/* ============================================================
   8. FILTRADO Y ORDEN
   ============================================================ */
function obtenerProductosFiltrados(categoria) {
  let lista = estado.productos.filter(p => p.categoria === categoria);

  if (estado.subcategoriaActual) {
    lista = lista.filter(p => p.subcategoria === estado.subcategoriaActual);
  }

  return aplicarOrden(lista);
}

function aplicarOrden(lista) {
  const copia = [...lista];
  switch (estado.orden) {
    case 'precio-asc':
      return copia.sort((a, b) => (a.precio || 0) - (b.precio || 0));
    case 'precio-desc':
      return copia.sort((a, b) => (b.precio || 0) - (a.precio || 0));
    case 'nombre-asc':
      return copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    default:
      return copia;
  }
}


/* ============================================================
   9. RENDERIZADO DE LA GRILLA
   ============================================================ */
function renderizarGrilla(lista) {
  elementos.grillaProductos.innerHTML = '';

  if (lista.length === 0) {
    elementos.categoriaVacio.hidden = false;
    return;
  }

  elementos.categoriaVacio.hidden = true;

  lista.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    elementos.grillaProductos.appendChild(tarjeta);
  });
}


/* ============================================================
   10. CREAR TARJETA DE PRODUCTO
   ============================================================ */
function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';
  tarjeta.dataset.id = producto.id;

  const img = document.createElement('img');
  img.src = producto.imagenes[0];
  img.alt = producto.nombre;
  img.loading = 'lazy';

  const contenedorImg = document.createElement('div');
  contenedorImg.className = 'tarjeta__imagen';
  contenedorImg.appendChild(img);

  const cuerpo = document.createElement('div');
  cuerpo.className = 'tarjeta__cuerpo';

  const nombre = document.createElement('h3');
  nombre.className = 'tarjeta__nombre';
  nombre.textContent = producto.nombre;

  const subcat = document.createElement('span');
  subcat.className = 'tarjeta__categoria';
  subcat.textContent = producto.subcategoria;

  const precio = document.createElement('p');
  if (producto.precio && producto.precio > 0) {
    precio.className = 'tarjeta__precio';
    precio.textContent = formatearPrecio(producto.precio);
  } else {
    precio.className = 'tarjeta__precio tarjeta__precio--consultar';
    precio.textContent = 'Consultar precio';
  }

  cuerpo.appendChild(nombre);
  cuerpo.appendChild(subcat);
  cuerpo.appendChild(precio);

  tarjeta.appendChild(contenedorImg);
  tarjeta.appendChild(cuerpo);

  tarjeta.addEventListener('click', () => {
    abrirPanelProducto(producto);
  });

  return tarjeta;
}


/* ============================================================
   11. FORMATEAR PRECIO
   ============================================================ */
function formatearPrecio(valor) {
  return '$' + valor.toLocaleString('es-AR');
}


/* ============================================================
   12. BUSCADOR
   ============================================================ */
function activarBuscador() {
  elementos.buscador?.addEventListener('input', (e) => {
    const texto = e.target.value;
    estado.busqueda = texto;

    if (texto.trim() === '') {
      if (estado.categoriaActual) {
        mostrarVista('categoria');
        renderizarCategoria();
      } else {
        mostrarVista('inicio');
      }
      return;
    }

    mostrarVista('categoria');
    renderizarBusqueda();
  });
}


/* ============================================================
   12.1 RENDERIZAR BÚSQUEDA
   ------------------------------------------------------------
   Respeta la categoría activa. Busca en nombre, subcategoría
   y categoría (no en la descripción larga, para evitar falsos
   positivos).
   ============================================================ */
function renderizarBusqueda() {
  const b = estado.busqueda.toLowerCase().trim();
  const categoriaActiva = estado.categoriaActual;

  const base = categoriaActiva
    ? estado.productos.filter(p => p.categoria === categoriaActiva)
    : estado.productos;

  const nombreCat = categoriaActiva
    ? categoriaActiva.charAt(0).toUpperCase() + categoriaActiva.slice(1)
    : null;

  elementos.tituloCategoria.textContent = nombreCat
    ? `Resultados en ${nombreCat}: "${estado.busqueda}"`
    : `Resultados: "${estado.busqueda}"`;

  elementos.chipsSubcategorias.innerHTML = '';

  const resultados = base.filter(p =>
    p.nombre.toLowerCase().includes(b) ||
    p.subcategoria.toLowerCase().includes(b) ||
    p.categoria.toLowerCase().includes(b)
  );

  renderizarGrilla(aplicarOrden(resultados));
}


/* ============================================================
   13. FILTRO DE ORDEN
   ============================================================ */
function activarOrden() {
  elementos.ordenProductos?.addEventListener('change', (e) => {
    estado.orden = e.target.value;

    if (estado.busqueda.trim() !== '') {
      renderizarBusqueda();
    } else if (estado.categoriaActual) {
      renderizarCategoria();
    }
  });
}


/* ============================================================
   14. BOTÓN "EXPLORAR" DEL HERO
   ============================================================ */
function activarBotonExplorar() {
  elementos.botonExplorar?.addEventListener('click', () => {
    estado.categoriaActual = 'decoracion';
    estado.subcategoriaActual = null;
    elementos.menuBotones.forEach(b => b.classList.remove('activo'));
    const botonDecoracion = elementos.menuBotones.find(b => b.dataset.vista === 'decoracion');
    if (botonDecoracion) botonDecoracion.classList.add('activo');
    mostrarVista('categoria');
    renderizarCategoria();
  });
}


/* ============================================================
   15. PANEL DEL PRODUCTO
   ============================================================ */

// --- 15.1 ABRIR EL PANEL ---
function abrirPanelProducto(producto) {
  estado.productoActual = producto;
  estado.indiceImagen = 0;

  elementos.panelFondo.style.backgroundImage = `url('${producto.imagenes[0]}')`;

  elementos.ppSubcategoria.textContent = producto.subcategoria;
  elementos.ppNombre.textContent = producto.nombre;
  elementos.ppDescripcion.textContent = producto.descripcion || '';

  if (producto.precio && producto.precio > 0) {
    elementos.ppPrecio.textContent = formatearPrecio(producto.precio);
    elementos.ppPrecio.classList.remove('pp-info__precio--consultar');
  } else {
    elementos.ppPrecio.textContent = 'Consultar precio';
    elementos.ppPrecio.classList.add('pp-info__precio--consultar');
  }

  elementos.ppListaEspecificaciones.innerHTML = '';
  if (producto.especificaciones) {
    Object.entries(producto.especificaciones).forEach(([clave, valor]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="clave">${clave}</span><span class="valor">${valor}</span>`;
      elementos.ppListaEspecificaciones.appendChild(li);
    });
  }

  renderizarMiniaturas(producto);
  mostrarImagen(0);

  // Reset del botón "Agregar al carrito"
  elementos.ppBotonAgregar.textContent = 'Agregar al carrito';
  elementos.ppBotonAgregar.disabled = false;
  elementos.ppBotonAgregar.classList.remove('pp-info__agregar--ok');

  elementos.panelProducto.classList.add('panel-producto--abierto');
  elementos.panelProducto.setAttribute('aria-hidden', 'false');
  document.body.classList.add('panel-abierto');
}

// --- 15.2 CERRAR EL PANEL ---
function cerrarPanelProducto() {
  elementos.panelProducto.classList.remove('panel-producto--abierto');
  elementos.panelProducto.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('panel-abierto');
  estado.productoActual = null;
}

// --- 15.3 MOSTRAR UNA IMAGEN DEL SLIDER ---
function mostrarImagen(indice) {
  const producto = estado.productoActual;
  if (!producto) return;

  const total = producto.imagenes.length;
  if (indice < 0) indice = total - 1;
  if (indice >= total) indice = 0;

  estado.indiceImagen = indice;

  elementos.ppSliderImagen.classList.add('pp-slider__imagen--cambiando');

  setTimeout(() => {
    elementos.ppSliderImagen.src = producto.imagenes[indice];
    elementos.ppSliderImagen.alt = producto.nombre;
    elementos.ppSliderImagen.classList.remove('pp-slider__imagen--cambiando');
  }, 120);

  elementos.ppSliderContador.textContent = `${indice + 1} / ${total}`;

  const unaSolaImagen = total <= 1;
  elementos.ppFlechaIzq.hidden = unaSolaImagen;
  elementos.ppFlechaDer.hidden = unaSolaImagen;
  elementos.ppSliderContador.hidden = unaSolaImagen;

  $$('.pp-slider__miniatura').forEach((mini, i) => {
    mini.classList.toggle('activa', i === indice);
  });
}

// --- 15.4 MINIATURAS ---
function renderizarMiniaturas(producto) {
  elementos.ppSliderMiniaturas.innerHTML = '';

  if (producto.imagenes.length <= 1) return;

  producto.imagenes.forEach((url, i) => {
    const btn = document.createElement('button');
    btn.className = 'pp-slider__miniatura';
    btn.setAttribute('aria-label', `Ver imagen ${i + 1}`);

    const img = document.createElement('img');
    img.src = url;
    img.alt = `${producto.nombre} - imagen ${i + 1}`;
    img.loading = 'lazy';

    btn.appendChild(img);

    btn.addEventListener('click', () => mostrarImagen(i));

    elementos.ppSliderMiniaturas.appendChild(btn);
  });
}

// --- 15.5 CONECTAR EVENTOS DEL PANEL ---
function activarPanelProducto() {

  elementos.cerrarPanelProducto?.addEventListener('click', cerrarPanelProducto);

  elementos.ppFlechaIzq?.addEventListener('click', () => {
    mostrarImagen(estado.indiceImagen - 1);
  });

  elementos.ppFlechaDer?.addEventListener('click', () => {
    mostrarImagen(estado.indiceImagen + 1);
  });

  elementos.panelProducto?.addEventListener('click', (e) => {
    if (e.target === elementos.panelProducto || e.target === elementos.panelFondo) {
      cerrarPanelProducto();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!estado.productoActual) return;
    if (e.key === 'ArrowLeft')  mostrarImagen(estado.indiceImagen - 1);
    if (e.key === 'ArrowRight') mostrarImagen(estado.indiceImagen + 1);
  });

  elementos.ppBotonAgregar?.addEventListener('click', () => {
    if (!estado.productoActual) return;
    agregarAlCarrito(estado.productoActual, 1);
    feedbackAgregado();
  });
}

function feedbackAgregado() {
  const btn = elementos.ppBotonAgregar;
  if (!btn) return;

  btn.textContent = '✓ Agregado';
  btn.disabled = true;
  btn.classList.add('pp-info__agregar--ok');

  setTimeout(() => {
    btn.textContent = 'Agregar al carrito';
    btn.disabled = false;
    btn.classList.remove('pp-info__agregar--ok');
  }, 1500);
}


/* ============================================================
   16. CARRITO
   ============================================================ */

function cargarCarritoDeStorage() {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    if (guardado) {
      const parseado = JSON.parse(guardado);
      if (Array.isArray(parseado)) {
        estado.carrito = parseado;
      }
    }
  } catch (err) {
    estado.carrito = [];
  }
}

function guardarCarrito() {
  try {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(estado.carrito));
  } catch (err) {
    // Si el navegador bloquea localStorage, sigue funcionando en memoria
  }
}

function agregarAlCarrito(producto, cantidad = 1) {
  const existente = estado.carrito.find(item => item.id === producto.id);

  if (existente) {
    existente.cantidad += cantidad;
  } else {
    estado.carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagenes[0],
      cantidad: cantidad
    });
  }

  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

function cambiarCantidad(id, delta) {
  const item = estado.carrito.find(i => i.id === id);
  if (!item) return;

  item.cantidad += delta;

  if (item.cantidad <= 0) {
    eliminarDelCarrito(id);
    return;
  }

  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  estado.carrito = estado.carrito.filter(i => i.id !== id);
  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
}

function calcularTotal() {
  return estado.carrito.reduce(
    (acc, item) => acc + (item.precio || 0) * item.cantidad,
    0
  );
}

function actualizarContadorCarrito() {
  const total = estado.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  elementos.contadorCarrito.textContent = total;

  elementos.contadorCarrito.classList.remove('cabecera__carrito-contador--pulso');
  void elementos.contadorCarrito.offsetWidth;
  elementos.contadorCarrito.classList.add('cabecera__carrito-contador--pulso');
}

function renderizarCarrito() {
  const cont = elementos.carritoContenido;
  cont.innerHTML = '';

  if (estado.carrito.length === 0) {
    const vacio = document.createElement('div');
    vacio.className = 'carrito__vacio';
    vacio.innerHTML = `
      <p>Tu carrito está vacío</p>
      <p class="carrito__vacio-sub">Explorá el catálogo para agregar productos.</p>
    `;
    cont.appendChild(vacio);
    elementos.carritoFooter.hidden = true;
    return;
  }

  elementos.carritoFooter.hidden = false;

  estado.carrito.forEach(item => {
    const fila = document.createElement('div');
    fila.className = 'carrito__item';

    fila.innerHTML = `
      <div class="carrito__item-imagen">
        <img src="${item.imagen}" alt="${item.nombre}">
      </div>
      <div class="carrito__item-info">
        <p class="carrito__item-nombre">${item.nombre}</p>
        <p class="carrito__item-precio">${formatearPrecio(item.precio)}</p>
        <div class="carrito__item-controles">
          <button class="carrito__item-btn" data-accion="restar" data-id="${item.id}" aria-label="Restar">−</button>
          <span class="carrito__item-cantidad">${item.cantidad}</span>
          <button class="carrito__item-btn" data-accion="sumar" data-id="${item.id}" aria-label="Sumar">+</button>
          <button class="carrito__item-eliminar" data-accion="eliminar" data-id="${item.id}" aria-label="Eliminar">🗑</button>
        </div>
      </div>
    `;

    cont.appendChild(fila);
  });

  cont.querySelectorAll('button[data-accion]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const accion = btn.dataset.accion;

      if (accion === 'sumar')    cambiarCantidad(id, 1);
      if (accion === 'restar')   cambiarCantidad(id, -1);
      if (accion === 'eliminar') eliminarDelCarrito(id);
    });
  });

  elementos.carritoTotal.textContent = formatearPrecio(calcularTotal());
}

function abrirPanelCarrito() {
  elementos.panelCarrito.classList.add('panel-carrito--abierto');
  elementos.panelCarrito.setAttribute('aria-hidden', 'false');

  elementos.carritoOverlay.hidden = false;
  requestAnimationFrame(() => {
    elementos.carritoOverlay.classList.add('carrito-overlay--visible');
  });

  document.body.classList.add('panel-abierto');
  renderizarCarrito();
}

function cerrarPanelCarrito() {
  elementos.panelCarrito.classList.remove('panel-carrito--abierto');
  elementos.panelCarrito.setAttribute('aria-hidden', 'true');

  elementos.carritoOverlay.classList.remove('carrito-overlay--visible');

  setTimeout(() => {
    elementos.carritoOverlay.hidden = true;
  }, 350);

  document.body.classList.remove('panel-abierto');
}

function activarCarrito() {
  elementos.botonCarrito?.addEventListener('click', abrirPanelCarrito);
  elementos.cerrarPanelCarrito?.addEventListener('click', cerrarPanelCarrito);
  elementos.carritoOverlay?.addEventListener('click', cerrarPanelCarrito);

  elementos.botonFinalizarCompra?.addEventListener('click', () => {
    cerrarPanelCarrito();
    abrirModalPedido();
  });

  // Vaciar carrito
  elementos.botonVaciarCarrito?.addEventListener('click', vaciarCarrito);

  renderizarCarrito();
}


// Vaciar el carrito completo (con confirmación)
function vaciarCarrito() {
  if (estado.carrito.length === 0) return;

  const confirmar = confirm('¿Querés vaciar todo el carrito?');
  if (!confirmar) return;

  estado.carrito = [];
  guardarCarrito();
  actualizarContadorCarrito();
  renderizarCarrito();
  mostrarToast('Carrito vaciado');
}


// Mostrar un aviso flotante (toast) por unos segundos
let toastTimeout = null;

function mostrarToast(mensaje) {
  if (!elementos.toast || !elementos.toastTexto) return;

  elementos.toastTexto.textContent = mensaje;
  elementos.toast.hidden = false;

  // Forzar reflow para que la transición se reinicie
  void elementos.toast.offsetWidth;
  elementos.toast.classList.add('toast--visible');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elementos.toast.classList.remove('toast--visible');
    setTimeout(() => { elementos.toast.hidden = true; }, 400);
  }, 3500);
}


/* ============================================================
   17. PEDIDO POR WHATSAPP
   ============================================================ */

function abrirModalPedido() {
  if (estado.carrito.length === 0) return;

  elementos.pasoFormulario.hidden = false;
  elementos.pasoPreview.hidden = true;
  elementos.opcionesWhatsapp.hidden = true;
  elementos.formPedidoError.hidden = true;

  elementos.modalPedido.hidden = false;
  document.body.classList.add('panel-abierto');
}

function cerrarModalPedido() {
  elementos.modalPedido.hidden = true;
  document.body.classList.remove('panel-abierto');
}

function irAPasoPreview() {
  elementos.pasoFormulario.hidden = true;
  elementos.pasoPreview.hidden = false;
  elementos.opcionesWhatsapp.hidden = true;
}

function volverAlFormulario() {
  elementos.pasoPreview.hidden = true;
  elementos.pasoFormulario.hidden = false;
  elementos.opcionesWhatsapp.hidden = true;
}

function generarMensaje(datos) {
  const lineas = [];
  lineas.push('¡Hola! Quiero hacer el siguiente pedido desde Click & Buy Store:');
  lineas.push('');
  lineas.push('📦 Productos:');

  estado.carrito.forEach(item => {
    const subtotal = (item.precio || 0) * item.cantidad;
    lineas.push(
      `- ${item.cantidad}x ${item.nombre} — ${formatearPrecio(item.precio)} c/u = ${formatearPrecio(subtotal)}`
    );
  });

  lineas.push('');
  lineas.push(`💰 Total estimado: ${formatearPrecio(calcularTotal())}`);
  lineas.push('');
  lineas.push(`👤 Nombre: ${datos.nombre}`);
  lineas.push(`📍 Localidad: ${datos.localidad}`);
  lineas.push(`🤝 Encuentro: ${datos.encuentro}`);

  if (datos.comentarios && datos.comentarios.trim()) {
    lineas.push(`💬 Comentarios: ${datos.comentarios.trim()}`);
  }

  lineas.push('');
  lineas.push('Quedo atento/a. ¡Gracias!');

  return lineas.join('\n');
}

function enviarPorWhatsapp(numero) {
  const datos = {
    nombre: elementos.pedidoNombre.value.trim(),
    localidad: elementos.pedidoLocalidad.value.trim(),
    encuentro: elementos.pedidoEncuentro.value.trim(),
    comentarios: elementos.pedidoComentarios.value.trim()
  };

  const mensaje = generarMensaje(datos);
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  mostrarToast('Abriendo WhatsApp…');
  window.open(url, '_blank', 'noopener');
}

function activarModalPedido() {
  $$('[data-cerrar-modal]').forEach(el => {
    el.addEventListener('click', cerrarModalPedido);
  });

  elementos.formPedido?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = elementos.pedidoNombre.value.trim();
    const localidad = elementos.pedidoLocalidad.value.trim();
    const encuentro = elementos.pedidoEncuentro.value.trim();

    if (!nombre || !localidad || !encuentro) {
      elementos.formPedidoError.textContent =
        'Por favor completá todos los campos obligatorios.';
      elementos.formPedidoError.hidden = false;
      return;
    }

    elementos.formPedidoError.hidden = true;

    const mensaje = generarMensaje({
      nombre,
      localidad,
      encuentro,
      comentarios: elementos.pedidoComentarios.value.trim()
    });
    elementos.previewMensaje.textContent = mensaje;

    irAPasoPreview();
  });

  elementos.volverFormulario?.addEventListener('click', volverAlFormulario);

  elementos.botonMandarWhatsapp?.addEventListener('click', () => {
    elementos.opcionesWhatsapp.hidden = !elementos.opcionesWhatsapp.hidden;
  });

  $$('.btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
      enviarPorWhatsapp(btn.dataset.numero);
    });
  });
}


/* ============================================================
   18. NOVEDADES
   ------------------------------------------------------------
   Las novedades están cargadas manualmente en el HTML dentro
   de #listaNovedades. No requieren JavaScript por ahora.
   ============================================================ */


/* ============================================================
   19. UTILIDADES VARIAS
   ============================================================ */
function actualizarAnio() {
  if (elementos.anioActual) {
    elementos.anioActual.textContent = new Date().getFullYear();
  }
}


/* ============================================================
   20. MANEJO DE ERRORES DE IMÁGENES
   ------------------------------------------------------------
   Si una imagen no carga (ruta rota, archivo faltante, etc.),
   se reemplaza automáticamente por un placeholder gris con
   el texto "Imagen no disponible".
   ============================================================ */
function activarManejoErroresImagenes() {

  // Placeholder SVG generado en línea (no requiere archivo externo)
  const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
      '<rect width="400" height="400" fill="#F5F5F5"/>' +
      '<text x="200" y="200" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#999999">Imagen no disponible</text>' +
    '</svg>'
  );

  // El evento "error" de imágenes NO burbujea, así que usamos
  // captura (tercer parámetro = true) para atajarlo globalmente.
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (img && img.tagName === 'IMG' && !img.dataset.errorHandled) {
      img.dataset.errorHandled = '1';
      img.src = PLACEHOLDER;
    }
  }, true);
}


/* ============================================================
   21. MANEJADOR CENTRAL DE ESC
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  if (!elementos.modalPedido.hidden) {
    cerrarModalPedido();
    return;
  }

  if (elementos.panelCarrito.classList.contains('panel-carrito--abierto')) {
    cerrarPanelCarrito();
    return;
  }

  if (estado.productoActual) {
    cerrarPanelProducto();
    return;
  }
});


/* ============================================================
   FIN DEL SCRIPT
   ============================================================ */
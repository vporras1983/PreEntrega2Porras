function cargarData() {
  const entregas = [
    {
      articulo: "Baño portátil",
      cantidad: 3,
      rfid: 6573156,
      ubicacion: "AA10",
    },
    {
      articulo: "Cuchara",
      cantidad: 6,
      rfid: 253896,
      ubicacion: "JW78",
    },
    {
      articulo: "Cuchillo",
      cantidad: 6,
      rfid: 253885,
      ubicacion: "JW77",
    },
    {
      articulo: "Mesa",
      cantidad: 1,
      rfid: 458122,
      ubicacion: "IK27",
    },
    {
      articulo: "Silla",
      cantidad: 6,
      rfid: 265442,
      ubicacion: "IK24",
    },
    {
      articulo: "Tenedor",
      cantidad: 6,
      rfid: 943856,
      ubicacion: "JW76",
    },
  ];

  const devoluciones = [
    {
      articulo: "Luces",
      cantidad: "3",
      rfid: "367356",
      ubicacion: "BA20",
    },
    {
      articulo: "Alargue",
      cantidad: "6",
      rfid: "529396",
      ubicacion: "SS17",
    },
    {
      articulo: "Cámara",
      cantidad: "6",
      rfid: "925885",
      ubicacion: "AW57",
    },
    {
      articulo: "Generador",
      cantidad: "1",
      rfid: "854582",
      ubicacion: "KI72",
    },
    {
      articulo: "Vestido de novia",
      cantidad: "1",
      rfid: "546542",
      ubicacion: "KI42",
    },
    {
      articulo: "Traje negro hombre adulto",
      cantidad: "6",
      rfid: "369386",
      ubicacion: "WA42",
    },
  ];

  const tablaEntregas = document.querySelector("#tablaEntregas tbody");
  if (tablaEntregas) {
    entregas.forEach((entrega) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
          <td>${entrega.articulo}</td>
          <td>${entrega.cantidad}</td>
          <td>${entrega.rfid}</td>
          <td>${entrega.ubicacion}</td>
        `;
      tablaEntregas.appendChild(fila);
    });
  } else {
    console.error("Error al cargar la tabla: no se encontró el elemento tbody");
  }

  const tablaDevoluciones = document.querySelector("#tablaDevoluciones tbody");
  if (tablaDevoluciones) {
    devoluciones.forEach((entrega) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
          <td>${entrega.articulo}</td>
          <td>${entrega.cantidad}</td>
          <td>${entrega.rfid}</td>
          <td>${entrega.ubicacion}</td>
        `;
      tablaDevoluciones.appendChild(fila);
    });
  } else {
    console.error("Error al cargar la tabla: no se encontró el elemento tbody");
  }
}
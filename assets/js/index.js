const propiedades_venta = [
    {
      nombre: 'Casa de campo con piscina',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Hermosa casa de campo con piscina en una zona tranquila.',
      ubicacion: '123 Countryside Ave, Rural Town, CA',
      habitaciones: 4,
      costo: 3000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento moderno en el centro',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Apartamento moderno y céntrico, cerca de todo.',
      ubicacion: '456 City Center Rd, Downtown, CA',
      habitaciones: 2,
      costo: 2500,
      smoke: true,
      pets: false
    },
    {
      nombre: 'Penthouse de lujo con vistas al mar',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Penthouse de lujo con espectaculares vistas al mar.',
      ubicacion: '789 Ocean View Blvd, Seaside Town, CA',
      habitaciones: 3,
      costo: 6000,
      smoke: false,
      pets: true
    }
  ];
  

  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Apartamento céntrico con dos habitaciones y acceso a transporte público.',
      ubicacion: '123 Main Street, Anytown, CA',
      habitaciones: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento con vista al mar',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Hermoso apartamento con vistas al mar y balcón.',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA',
      habitaciones: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio en zona residencial',
      src: './assets/img/hotel.jpeg',
      descripcion: 'Condominio moderno en una tranquila zona residencial.',
      ubicacion: '789 Suburban Rd, Quiet Town, CA',
      habitaciones: 2,
      costo: 2200,
      smoke: false,
      pets: false
    }
  ];
  

  function renderizarPropiedades(propiedades, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      propiedades.forEach(propiedad => {
        container.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
              <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                  <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> 
                  ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                  <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i> 
                  ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>`;
      });
    }
  }
  

  if (document.getElementById('propiedadesVenta')) {
    renderizarPropiedades(propiedades_venta.slice(0, 3), 'propiedadesVenta');
  }
  
  if (document.getElementById('propiedadesAlquiler')) {
    renderizarPropiedades(propiedades_alquiler.slice(0, 3), 'propiedadesAlquiler');
  }
  

  if (document.URL.includes('propiedades_venta.html')) {
    renderizarPropiedades(propiedades_venta, 'propiedadesVenta');
  }
  

  if (document.URL.includes('propiedades_alquiler.html')) {
    renderizarPropiedades(propiedades_alquiler, 'propiedadesAlquiler');
  }
  
  
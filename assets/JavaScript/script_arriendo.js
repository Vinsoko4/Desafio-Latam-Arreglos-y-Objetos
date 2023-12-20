const enAlquiler = [
  {
    name: "Apartamento en el centro de la ciudad",
    imgsrc:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    desc: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    adress: "123 Main Street, Anytown, CA 91234",
    room: 2,
    bath: 2,
    price: 2000,
    smoke: false,
    pets: true,
  },

  {
    name: "Apartamento luminoso con vista al mar",
    imgsrc:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    desc: "Este hermoso apartamento ofrece una vista impresionante al mar.",
    adress: "456 Ocean Avenue, Seaside Town, CA 56789",
    room: 3,
    bath: 3,
    price: 2500,
    smoke: true,
    pets: true,
  },

  {
    name: "Condominio moderno en zona residencial",
    imgsrc:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    desc: "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    adress: "123 Main Street, Anytown, CA91234",
    room: 2,
    bath: 2,
    price: 2200,
    smoke: false,
    pets: false,
  },

  {
    name: "Apartamento residencial cerca del metro",
    imgsrc:
      "https://cf.chilepropiedades.cl/imagenes/publicacion/venta/departamento/maipu/1/8be52054a0f14300bfd554df79baf105.jpeg",
    desc: "Apartamento amueblado en condominio tranquilo y seguro, cerca del metro.",
    adress: "San Francisco 75432, Loggia CA 65432",
    room: 2,
    bath: 1,
    price: 2500,
    smoke: false,
    pets: true,
  },

  {
    name: "Apartamento residencial en zona segura",
    imgsrc: "https://swisshaus.cl/wp-content/uploads/2023/04/01.1-2.jpg",
    desc: "Apartamento amueblado en condominio cerrado y seguro.",
    adress: "Quincy 56789, Massachusetts, CA 987765",
    room: 2,
    bath: 2,
    price: 2200,
    smoke: true,
    pets: false,
  },

  {
    name: "Apartamento con zona de camping",
    imgsrc:
      "https://www.engelvoelkers.com/images/52ace772-31f9-478c-9689-98804ce5ed26/rental-in-phoenix-arizona",
    desc: "Apartamento cerca de bosque y zona de camping.",
    adress: "Arizona 64393, Phoenix, CA 23456",
    room: 3,
    bath: 1,
    price: 2800,
    smoke: true,
    pets: true,
  },
];

const contenedor = document.querySelector("#alquiler .row");

let cards = "";

enAlquiler.forEach((prop) => {
  renderCards(prop);
});

contenedor.innerHTML = cards;

function renderCards(prop) {
  let petHTML = checkPets(prop);
  let smokeHTML = checkSmoke(prop);

  cards += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${prop.imgsrc}" class="card-img-top" alt="${prop.name}"/>
      <div class="card-body">
        <h5 class="card-title">
        ${prop.name}
        </h5>
        <p class="card-text">
        ${prop.desc}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${prop.adress}
        </p>
        <p>
          <i class="fas fa-bed"></i> 
          ${prop.room} Habitaciones | 
          <i class="fas fa-bath"></i> 
          ${prop.bath} Baños
        </p>
        <p>
        <i class="fas fa-dollar-sign"></i> 
        ${prop.price}
        </p>
        ${smokeHTML}
        ${petHTML}
      </div>
    </div>
  </div>
  `;
}

function checkPets(propiedad) {
  if (propiedad.pets) {
    return `
    <p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
    `;
  } else {
    return `
    <p class="text-danger">
    <i class="fa-solid fa-ban"></i> No se permiten mascotas
    </p>
    `;
  }
}

function checkSmoke(propiedad) {
  if (propiedad.smoke) {
    return `
    <p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
    </p>
    `;
  } else {
    return `
    <p class="text-danger">
    <i class="fas fa-smoking-ban"></i> No se permite fumar
    </p>
    `;
  }
}

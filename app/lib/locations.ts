export type Location = {
  name: string;
  slug: string;
  municipality: string;
  address: string;
  addressShort: string;
  phone: string;
  waNumber: string;
  waMessage: string;
  instagram: string | null;
  mapsUrl: string | null;
  moving?: {
    active: boolean;
    newAddress: string;
    newAddressShort: string;
    plazaName: string;
  };
  comingSoon?: boolean;
};

export const sucursales = [
  {
    id: "san-pedro",
    name: "San Pedro Garza García",
    address: "118 Plaza Kiarah, C. Murcia, Col. San Agustín, San Pedro Garza García, N.L.",
    addressShort: "Plaza Kiarah, San Pedro",
    moving: {
      active: true,
      newAddressShort: "Av. Real San Agustín 302, Plaza Saaghi",
    },
    mapsUrl: "https://www.google.com/maps/place/Salsa+y+Bachata+Fuego/@25.6337583,-100.3318433,17z",
    comingSoon: false,
  },
  {
    id: "san-jeronimo",
    name: "San Jerónimo",
    address: null,
    addressShort: "Fenix Dance Center",
    moving: null,
    mapsUrl: null,
    comingSoon: true,
  },
];

export const locations: Record<string, Location> = {
  "salsa-y-bachata-fuego": {
    name: "Salsa y Bachata Fuego",
    slug: "salsa-y-bachata-fuego",
    municipality: "San Pedro Garza García",
    address:
      "118 Plaza Kiarah, C. Murcia, Col. San Agustín, 66278 San Pedro Garza García, N.L.",
    addressShort: "Plaza Kiarah, San Pedro Garza García",
    phone: "81 2016 6663",
    waNumber: "5218110404188",
    waMessage:
      "Hola, quiero agendar una clase muestra en Salsa y Bachata Fuego San Pedro.",
    instagram: null, // pendiente confirmar — @sb_sanpedro es otra escuela diferente
    mapsUrl:
      "https://www.google.com/maps/place/Salsa+y+Bachata+Fuego/@25.6337583,-100.3318433,17z",
    moving: {
      active: true,
      newAddress:
        "Av. Real San Agustín 302, Residencial San Agustín 1er Sector, 66260 San Pedro Garza García, N.L.",
      newAddressShort: "Av. Real San Agustín 302",
      plazaName: "Plaza Saaghi",
    },
  },
};

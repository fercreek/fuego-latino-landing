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

export const locations: Record<string, Location> = {
  "san-pedro": {
    name: "Salsa y Bachata Fuego",
    slug: "san-pedro",
    municipality: "San Pedro Garza García",
    address:
      "118 Plaza Kiarah, C. Murcia, Col. San Agustín, 66278 San Pedro Garza García, N.L.",
    addressShort: "Plaza Kiarah, San Pedro Garza García",
    phone: "81 2016 6663",
    waNumber: "5218110404188",
    waMessage:
      "Hola, quiero agendar una clase muestra en Salsa y Bachata Fuego San Pedro.",
    instagram: "sb_sanpedro",
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
  "san-nicolas": {
    name: "Salsa y Bachata Fuego",
    slug: "san-nicolas",
    municipality: "San Nicolás de los Garza",
    address: "Por confirmar",
    addressShort: "San Nicolás de los Garza",
    phone: "81 1040 4188",
    waNumber: "5218110404188",
    waMessage:
      "Hola, quiero información sobre Salsa y Bachata Fuego en San Nicolás.",
    instagram: null,
    mapsUrl: null,
    comingSoon: true,
  },
};

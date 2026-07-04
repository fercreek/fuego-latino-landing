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
    id: "san-agustin",
    name: "San Agustín",
    address: "Av. Real San Agustín 302, Plaza Saaghi, Residencial San Agustín 1er Sector, 66260 San Pedro Garza García, N.L.",
    addressShort: "Av. Real San Agustín 302, Plaza Saaghi",
    mapsUrl: "https://www.google.com/maps/place/Salsa+y+Bachata+Fuego/@25.6337583,-100.3318433,17z",
    instagramUrl: "https://www.instagram.com/salsaybachatafuego/",
    styles: "Salsa, Bachata y Cumbia",
    comingSoon: false,
  },
  {
    id: "san-jeronimo",
    name: "San Jerónimo",
    address: "Blvd. Puerta del Sol 1009, Col. Colinas de San Jerónimo, Monterrey, N.L. 64630",
    addressShort: "Blvd. Puerta del Sol 1009, San Jerónimo",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blvd.+Puerta+del+Sol+1009,+Colinas+de+San+Jer%C3%B3nimo,+Monterrey",
    facebookUrl: "https://www.facebook.com/p/Salsa-y-Bachata-Fuego-Sucursal-San-Jer%C3%B3nimo-61590396188766/",
    instagramUrl: "https://www.instagram.com/salsa_y_bachata_fuego_san_jemo/",
    styles: "Salsa, Bachata y Cumbia",
    comingSoon: false,
  },
];

export const locations: Record<string, Location> = {
  "salsa-y-bachata-fuego": {
    name: "Salsa y Bachata Fuego",
    slug: "salsa-y-bachata-fuego",
    municipality: "San Pedro Garza García",
    address:
      "Av. Real San Agustín 302, Plaza Saaghi, Residencial San Agustín 1er Sector, 66260 San Pedro Garza García, N.L.",
    addressShort: "Av. Real San Agustín 302, Plaza Saaghi",
    phone: "81 2016 6663",
    waNumber: "5218110404188",
    waMessage:
      "Hola, quiero agendar una clase muestra en Salsa y Bachata Fuego San Agustín.",
    instagram: "salsaybachatafuego",
    mapsUrl:
      "https://www.google.com/maps/place/Salsa+y+Bachata+Fuego/@25.6337583,-100.3318433,17z",
  },
};

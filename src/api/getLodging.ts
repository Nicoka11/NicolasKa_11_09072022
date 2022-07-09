import data from "../data.json";

export type lodging = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

const getAllLodgings = () => {
  const lodgings: lodging[] = data;
  return lodgings;
};

const getLodging = (id: string) => {
  const lodgings: lodging[] = data;
  return lodgings.find((lodging) => lodging.id === id);
};

export { getAllLodgings, getLodging };

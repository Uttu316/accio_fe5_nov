export const formatDogsData = (dogs) => {
  let data = [];

  if (dogs && dogs.length) {
    data = dogs.map((i) => {
      return {
        id: i.id,
        name: i.name,
        image: i.image.url,
        subtitle: i.bred_for,
        description: i.temperament,
      };
    });
  }
  return data;
};
export const formatCatsData = (cats) => {
  let data = [];
  if (cats && cats.length) {
    data = cats.map((i) => {
      return {
        id: i.id,
        name: i.name,
        image: i.image,
        subtitle: i.origin,
        description: i.temperament,
      };
    });
  }
  return data;
};

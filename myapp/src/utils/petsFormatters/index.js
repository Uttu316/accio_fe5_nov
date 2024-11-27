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

export const formatDogData = (dog) => {
  if (!dog) return null;

  const data = {
    name: dog.name,
    temperament: dog.temperament,
    breed: dog.bred_for,
    life_span: dog.life_span,
    image: dog.image.url,
    id: dog.id,
    weight: dog.weight.metric,
    description: dog.breed_group,
  };
  return data;
};
export const formatCatData = (cat) => {
  if (!cat) return null;

  const data = {
    name: cat.name,
    temperament: cat.temperament,
    breed: cat.origin,
    life_span: cat.life_span,
    image: cat.image,
    id: cat.id,
    weight: cat.weight.metric,
    description: cat.description,
  };
  return data;
};

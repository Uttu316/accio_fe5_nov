import { api } from "..";
import * as PF from "../../utils/petsFormatters";

export const getPets = async (pet) => {
  if (!pet) return null;

  try {
    const res = await api({
      path: `public/${pet}`,
    });

    if (res && res.data) {
      let data = [];
      if (pet === "dogs") {
        data = PF.formatDogsData(res.data);
      } else if (pet === "cats") {
        data = PF.formatCatsData(res.data);
      }

      return data;
    }
    throw new Error("Pet is not available");
  } catch (e) {
    const errorMessage = e.message;
    return Promise.reject(errorMessage);
  }
};

export const getPet = async (pet, petId) => {
  if (!pet || !petId) return null;

  try {
    const res = await api({
      path: `public/${pet}/${petId}`,
    });

    if (res) {
      let data = null;
      if (pet === "dogs") {
        data = PF.formatDogData(res);
      } else if (pet === "cats") {
        data = PF.formatCatData(res);
      }

      return data;
    }

    throw new Error("Pet is not available");
  } catch (e) {
    const errorMessage = e.message;
    return Promise.reject(errorMessage);
  }
};

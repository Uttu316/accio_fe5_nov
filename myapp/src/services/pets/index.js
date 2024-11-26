import { api } from "..";
import { formatCatsData, formatDogsData } from "../../utils/petsFormatters";

export const getPets = async (pet) => {
  if (!pet) return null;

  try {
    const res = await api({
      path: `public/${pet}`,
    });

    if (res && res.data) {
      let data = [];
      if (pet === "dogs") {
        data = formatDogsData(res.data);
      } else if (pet === "cats") {
        data = formatCatsData(res.data);
      }

      return data;
    }
    throw new Error("Pet is not available");
  } catch (e) {
    const errorMessage = e.message;
    return Promise.reject(errorMessage);
  }
};

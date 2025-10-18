import api from "./api";

export const getListRoom = async () => {
  try {
    const response = await api.get("phong-thue");
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

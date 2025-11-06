import api from "./api";

export const getLocation = async () => {
  try {
    const response = await api.get("location");
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import type { BaseApiResponse } from "@/interfaces/base.interface";
import api from "./api";
import type { Room } from "@/interfaces/room.interface";

export const getListRoom = async (): Promise<Room[] | undefined> => {
  try {
    const response = await api.get<BaseApiResponse<Room[]>>("phong-thue");
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import type { BaseApiResponse } from "@/interfaces/base.interface";
import api from "./api";
import type { RoomItems } from "@/interfaces/room.interface";

export const getRoomListApi = async (): Promise<RoomItems[] | undefined> => {
  try {
    const response =
      await api.get<BaseApiResponse<RoomItems[]>>("/phong-thue/");
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

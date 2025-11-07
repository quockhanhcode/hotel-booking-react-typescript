import type { BaseApiResponse } from "@/interfaces/base.interface";
import api from "./api";
import type { Location } from "@/interfaces/location.interface";

export const getLocation = async (): Promise<Location[] | undefined> => {
  try {
    const response = await api.get<BaseApiResponse<Location[]>>("vi-tri");
    return response.data.content;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

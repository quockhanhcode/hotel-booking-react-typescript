import type { BaseApiResponse } from "@/interfaces/base.interface";
import type { User } from "@/interfaces/user.interface";
import api from "./api";

export const getUsersListApi = async () => {
  try {
    const response = await api.get<BaseApiResponse<User[]>>("users/");
    return response?.data?.content ?? [];
  } catch (error) {
    console.log("🎄 ~ usersListApi ~ error:", error);
    throw error;
  }
};


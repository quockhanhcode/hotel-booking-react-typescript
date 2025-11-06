import type { BaseApiResponse } from "@/interfaces/base.interface";
import type { PagiUser, User } from "@/interfaces/user.interface";
import api from "./api";

export const getUsersListApi = async (
  pageIndex: number,
  pageSize: number,
  keyword?: string
) => {
  try {
    const key = keyword ? `&keyword=${keyword}` : "";
    const response = await api.get<BaseApiResponse<PagiUser<User[]>>>(
      `users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}${key}`
    );
    return response.data.content;
  } catch (error) {
    console.log("🎄 ~ usersListApi ~ error:", error);
    throw error;
  }
};

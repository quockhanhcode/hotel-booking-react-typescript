import type { BaseApiResponse } from "@/interfaces/base.interface";
import type { PagiUser, UserItem } from "@/interfaces/user.interface";
import api from "./api";
// https://airbnbnew.cybersoft.edu.vn/api/users/phan-trang-tim-kiem?pageIndex=1&pageSize=2
// https://airbnbnew.cybersoft.edu.vn/api/users/phan-trang-tim-kiem?pageIndex=1&pageSize=3&keyword=aa
export const getUsersListApi = async (
  pageIndex: number,
  pageSize: number,
  keyword?: string
) => {
  try {
    const key = keyword ? `&keyword=${keyword}` : "";
    const response = await api.get<BaseApiResponse<PagiUser<UserItem[]>>>(
      `users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}${key}`
    );
    return response.data.content;
  } catch (error) {
    console.log("🎄 ~ usersListApi ~ error:", error);
    throw error;
  }
};

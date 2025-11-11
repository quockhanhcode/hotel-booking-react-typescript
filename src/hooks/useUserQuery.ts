import type { PagiUser, UserItem } from "@/interfaces/user.interface";
import { getUsersListAllApi, getUsersListApi } from "@/services/users.api";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const useUsersListAllQuery = () =>
  useQuery({
    queryKey: ["users-list-all"],
    queryFn: () => getUsersListAllApi(),
  });

export const useUsersListQuery = (
  pageIndex: number,
  pageSize: number,
  keyword?: string,
  optional?: Partial<Omit<UseQueryOptions<PagiUser<UserItem[]>, Error, PagiUser<UserItem[]>, string[]>, "queryKey" | "queryFn">>
) =>
  useQuery({
    queryKey: ["users-list"],
    queryFn: () => getUsersListApi(pageIndex, pageSize, keyword),
    ...optional,
  });

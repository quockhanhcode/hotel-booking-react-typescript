import { getUsersListApi } from "@/services/users.api";
import { useQuery } from "@tanstack/react-query";
// optional?: Partial<Omit<UseQueryOptions<unknown, Error, unknown, string[]>, 'queryKey' | 'queryFn'>>
export const useUsersListQuery = (pageIndex: number, pageSize: number, keyword?: string, optional?: Record<string, any>) => (
    useQuery({
        queryKey: ["users-list"],
        queryFn: () => getUsersListApi(pageIndex, pageSize, keyword),
        ...optional
    })
)

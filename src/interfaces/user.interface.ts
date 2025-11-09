export interface PagiUser<T> {
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  keywords: null;
  data: T;
}

export interface UserItem {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: null;
  birthday: string;
  avatar: null;
  gender: boolean;
  role: string;
}

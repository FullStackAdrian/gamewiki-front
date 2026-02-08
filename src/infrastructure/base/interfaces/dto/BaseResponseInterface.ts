export interface BaseResponseInterface< T > {
  status: number;
  message?: string;
  data?: T;
}

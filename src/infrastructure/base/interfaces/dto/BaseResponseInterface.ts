export interface BaseResponseInterface<TEnt> {
  status: number;
  message?: string;
  data?: TEnt;
}

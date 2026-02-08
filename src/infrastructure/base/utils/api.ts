import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";

const createAxiosInstance = (
  baseURL: string,
  token?: string | undefined,
): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  instance.interceptors.request.use((config) => {
    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const { data, status } = error.response!;
      switch (status) {
        case 400:
          console.error(data);
          break;
        case 401:
          throw new Error("unauthorised");
          break;
        case 404:
          throw new Error("/not-found");
          break;
        case 500:
          throw new Error("/server-error");
          break;
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

// this return just status and message, and data if it exists, otherwise trhow an error with response message
const responseBody = <TEnt>(response: AxiosResponse): BaseResponseInterface<TEnt> => {
  const status = response.status;
  const message = response.data?.message || "Respuesta del servidor inválida";
  const data = response.data?.content?.viewModel;

  // if (data as TEnt ) {
  //   throw new Error(message ?? "Respuesta inválida del servidor");
  // }

  return {
    status,
    message,
    data: data as TEnt,
  } as BaseResponseInterface<TEnt>;
};

const createRequest = (baseURL: string, token: string | null) => {
  const axiosInstance = createAxiosInstance(baseURL, token ? token : undefined);
  return {
    get: <TEnt, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<TEnt>> =>
      axiosInstance
        .get(request.uri)
        .then((response) => responseBody<TEnt>(response)),

    post: <TEnt, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<TEnt>> =>
      axiosInstance
        .post(request.uri, request.body)
        .then((response) => responseBody<TEnt>(response)),

    put: <TEnt, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<TEnt>> =>
      axiosInstance
        .put(request.uri, request.body)
        .then((response) => responseBody<TEnt>(response)),

    patch: <TEnt, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<TEnt>> =>
      axiosInstance
        .patch(request.uri, request.body)
        .then((response) => responseBody<TEnt>(response)),

    delete: <TEnt, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<TEnt>> =>
      axiosInstance
        .delete(request.uri)
        .then((response) => responseBody<TEnt>(response)),
  };
};

export default createRequest;

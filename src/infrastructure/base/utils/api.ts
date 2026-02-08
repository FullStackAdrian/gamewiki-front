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

// this return the viewModel if it exists, otherwise trhow an error with response message
const responseBody = <T>(response: AxiosResponse): BaseResponseInterface<T> => {
  const status = response.status;
  const message = response.data?.message || "Respuesta del servidor inválida";
  const viewModel = response.data?.content?.viewModel;

  // if (viewModel == null) {
  //   throw new Error(message ?? "Respuesta inválida del servidor");
  // }

  return {
    status,
    message,
    data: viewModel as T,
  } as BaseResponseInterface<T>;
};

const createRequest = (baseURL: string, token: string | null) => {
  const axiosInstance = createAxiosInstance(baseURL, token ? token : undefined);
  return {
    get: <T, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<T>> =>
      axiosInstance
        .get(request.uri)
        .then((response) => responseBody<T>(response)),

    post: <T, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<T>> =>
      axiosInstance
        .post(request.uri, request.body)
        .then((response) => responseBody<T>(response)),

    put: <T, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<T>> =>
      axiosInstance
        .put(request.uri, request.body)
        .then((response) => responseBody<T>(response)),

    patch: <T, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<T>> =>
      axiosInstance
        .patch(request.uri, request.body)
        .then((response) => responseBody<T>(response)),

    delete: <T, TRequest extends BaseRequestInterface>(
      request: TRequest,
    ): Promise<BaseResponseInterface<T>> =>
      axiosInstance
        .delete(request.uri)
        .then((response) => responseBody<T>(response)),
  };
};

export default createRequest;

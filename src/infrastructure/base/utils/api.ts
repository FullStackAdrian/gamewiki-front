import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";

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

// Simple: recibe AxiosResponse, devuelve BaseResponseInterface<TModel>
const responseBody = async <
  TModel extends BaseModelInterface,
  TResponse extends BaseResponseInterface<TModel>,
>(
  response: AxiosResponse,
): Promise<TResponse> => {
  const status = response.status;
  const message = response.data?.message || "Respuesta del servidor inválida";
  const data = response.data?.content?.viewModel as TModel;

  return {
    status,
    message,
    data,
  } as TResponse;
};

const createRequest = (baseURL: string, token: string | null) => {
  const axiosInstance = createAxiosInstance(baseURL, token ? token : undefined);
  return {
    get: <
      TModel extends BaseModelInterface,
      TRequest extends BaseRequestInterface,
      TResponse extends BaseResponseInterface<TModel>,
    >(
      request: TRequest,
    ): Promise<TResponse> =>
      axiosInstance
        .get(request.uri)
        .then((response) => responseBody<TModel, TResponse>(response)),

    post: <
      TModel extends BaseModelInterface,
      TRequest extends BaseRequestInterface,
      TResponse extends BaseResponseInterface<TModel>,
    >(
      request: TRequest,
    ): Promise<TResponse> =>
      axiosInstance
        .post(request.uri, request.body)
        .then((response) => responseBody<TModel, TResponse>(response)),

    put: <
      TModel extends BaseModelInterface,
      TRequest extends BaseRequestInterface,
      TResponse extends BaseResponseInterface<TModel>,
    >(
      request: TRequest,
    ): Promise<TResponse> =>
      axiosInstance
        .put(request.uri, request.body)
        .then((response) => responseBody<TModel, TResponse>(response)),

    patch: <
      TModel extends BaseModelInterface,
      TRequest extends BaseRequestInterface,
      TResponse extends BaseResponseInterface<TModel>,
    >(
      request: TRequest,
    ): Promise<TResponse> =>
      axiosInstance
        .patch(request.uri, request.body)
        .then((response) => responseBody<TModel, TResponse>(response)),

    delete: <
      TModel extends BaseModelInterface,
      TRequest extends BaseRequestInterface,
      TResponse extends BaseResponseInterface<TModel>,
    >(
      request: TRequest,
    ): Promise<TResponse> =>
      axiosInstance
        .delete(request.uri)
        .then((response) => responseBody<TModel, TResponse>(response)),
  };
};

export default createRequest;

import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";


const createAxiosInstance = (baseURL: string , token?: string | undefined): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL
  });

  instance.interceptors.request.use(config => {
    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    res => res,
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
    }
  );

  return instance;
};

// this return the viewModel if it exists, otherwise trhow an error with response message
const responseBody = <T>(response: AxiosResponse): T => {
  const viewModel = response.data?.content?.viewModel;

  if (viewModel !== undefined) {
    return viewModel as T;
  }

  const message = response.data?.message || "Respuesta del servidor inválida";
  throw new Error(message);
};

export const createRequest = (baseURL: string, token: string | null) => {
  const axiosInstance = createAxiosInstance( baseURL ,token ? token : undefined);
  return {
    get: <TResponse, TRequest>(
      url: string,
      body: TRequest
    ): Promise<TResponse> =>
      axiosInstance
        .post(url, body)
        .then(response => responseBody<TResponse>(response)),
    post: <TResponse, TRequest>(
      url: string,
      body: TRequest
    ): Promise<TResponse> =>
      axiosInstance
        .post(url, body)
        .then(response => responseBody<TResponse>(response))
  };
};
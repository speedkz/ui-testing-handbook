import axios, {
  AxiosError,
  AxiosResponse,
  type AxiosRequestConfig,
} from "axios";

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
});

axiosIntance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIntance.interceptors.response.use(
  (respone) => respone,
  (error) => handleRequestError(error)
);

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
const handleRequestError = async (error: AxiosError): Promise<void> => {
  const config: MyAxiosRequestConfig = error.config || {};
  if (error.response?.status === 401 && !config._retry) {
    const controller = new AbortController();
    const { signal } = controller;
    config._retry = true;
  }
  return Promise.reject(error);
};

export function transformRequest<T>(
  config: AxiosRequestConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<[null, T] | [AxiosError<unknown, any>, null]> {
  return axiosIntance.request(config).then(
    (val: AxiosResponse<T>) => [null, val || val] as unknown as [null, T],
    (err: AxiosError) => [err, null] as [AxiosError, null]
  );
}

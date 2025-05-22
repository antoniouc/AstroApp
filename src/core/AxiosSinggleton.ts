// src/core/HttpClient.ts
import axios, { AxiosInstance } from 'axios';
import { API_NASA } from './Api';

class HttpClient {
  private static instance: AxiosInstance;

  private constructor() {} // Previene instancias externas

  public static getInstance(): AxiosInstance {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: 'https://api.nasa.gov',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          api_key: API_NASA.API_KEY, // Reemplázalo por tu key real
        },
      });

    }

    return HttpClient.instance;
  }
}

export default HttpClient;

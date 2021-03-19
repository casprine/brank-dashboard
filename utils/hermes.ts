import axios, { AxiosPromise } from 'axios';
import Cookies from 'js-cookie';

// our network system powered by the Olympian of god of transport

const baseUrl: string = 'https://api.withbrank.com';

interface IHermes {
  data?: any;
  url?: string;
  method?: 'POST' | 'GET' | 'PUT';
  token?: string;
}

export function hermes({ data, url, method = 'POST' }: IHermes): AxiosPromise {
  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    data,
    url: requestURL,
    method,
  });
}

export function guardHermes({ data, url, method = 'POST', token }: IHermes): AxiosPromise {
  const cookie = Cookies.get('token');

  if (!token && !cookie) throw Error('No token found');

  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    method,
    url: requestURL,
    data: data,
    headers: { Authorization: `Bearer ${token || cookie}` },
  });
}

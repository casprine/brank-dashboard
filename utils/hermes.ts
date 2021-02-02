import axios, { AxiosPromise } from 'axios';

// our network system powered by the Olympian of god of transport

const baseUrl: string = 'http://brank-core.herokuapp.com';

// interface IRequestData {}

interface IHermes {
  data?: any;
  url?: string;
  method?: 'POST' | 'GET' | 'PUT';
}

export function hermes({ data, url, method = 'POST' }: IHermes): AxiosPromise {
  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    data,
    url: requestURL,
    method,
  });
}

export function guardHermes({ data, url, method }: IHermes): AxiosPromise {
  const token = localStorage.getItem('token');
  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    method,
    url: requestURL,
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  });
}

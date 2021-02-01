import axios from 'axios';

// our network system powered by the Olympian of god of transport

const baseUrl: string = 'https://brank-core.herokuapp.com';

interface IRequestData {}

interface IHermes {
  data?: any;
  url?: string;
  method?: 'POST' | 'GET' | 'PUT';
}

export function hermes({ data, url, method = 'POST' }: IHermes) {
  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    data,
    url: requestURL,
    method,
    withCredentials: true,
  });
}

export function guardHermes({ data, url, method }: IHermes) {
  const token = localStorage.getItem('token');
  const requestURL: string = `${baseUrl}${url}`;

  return axios({
    method,
    url: requestURL,
    data: data,
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
}

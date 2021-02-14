import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { guardHermes } from 'utils/hermes';

export const AppContext = createContext({} as any);

const AppProvider = ({ children }) => {
  const [client, setClient] = useState<any>(null);
  const [showLoadingIndicator, setLoadingIndicator] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      const userId = Cookies.get('userId');

      if (token) {
        console.log('token is here', token);
        console.log('userId is here', userId);

        const response = await guardHermes({
          url: `/clients/${userId}`,
          method: 'GET',
        }).catch((error) => console.log('error', error));

        console.log({ response });

        // if (client) setClient(client);
      } else {
      }

      setLoadingIndicator(false);
    }

    loadUserFromCookies();
  }, []);

  return (
    <AppContext.Provider value={{ client, updateClient: setClient }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(AppContext);
};

export { useAppProvider };

export default AppProvider;

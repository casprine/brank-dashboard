import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { guardHermes, hermes } from 'utils/hermes';

export const AppContext = createContext({} as any);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<any>(null);
  const [showLoadingIndicator, setLoadingIndicator] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      const userId = Cookies.get('userId');

      if (token) {
        const response = await hermes({
          url: `/clients/${userId}`,
          method: 'GET',
        }).catch((error) => console.log('error', error));

        // if (client) setClient(client);
      } else {
      }

      setClient({ first_name: 'Casprine', last_name: 'Assempah', company_name: 'Kree' });
      setLoadingIndicator(false);
    }

    loadUserFromCookies();
  }, []);

  function logout() {
    Cookies.remove('token');
    Cookies.remove('userId');
    setClient(null);
    router.push('/login');
  }

  return (
    <AppContext.Provider
      value={{
        showLoadingIndicator,
        isAuthenticated: !!client,
        client,
        updateClient: setClient,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppProvider = () => {
  return useContext(AppContext);
};

export { useAppProvider };

export default AppProvider;

import { useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { guardHermes } from 'utils/hermes';

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
        try {
          const response = await guardHermes({
            url: `/clients/${userId}`,
            method: 'GET',
          });

          if (response?.data?.message === 'success') {
            setClient(response?.data?.data?.client);
            setLoadingIndicator(false);
          }
        } catch (error) {
          console.log('error', error);
        }
      } else {
        router.push('/login');
      }
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

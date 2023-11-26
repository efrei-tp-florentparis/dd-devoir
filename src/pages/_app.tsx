import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

/* styles */
import '@/styles/main.css';

/* composants */
import ContainerPage from '@/components/templates/ContainerPage';
import SwitchLang from '@/components/molecules/SwitchLang';
import Footer from '@/components/atoms/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [pathname, setPathname] = useState<string>();

  useEffect(() => {
    setPathname(router.pathname);

    const handleRouteChange = (url: string) => {
      setPathname(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.pathname]);

  return (
    <ContainerPage>
      <SwitchLang color={pathname == '/answer' ? 'white' : 'darkGreen'} />
      <Component {...pageProps} />
      <Footer />
    </ContainerPage>
  );
};

export default MyApp;

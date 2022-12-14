import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // To handle the hydration error 
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      // <Provider store={store}>
        <Component {...pageProps} />
      // </Provider>
    );
  }
  
  
  
  
  
  
  
  // This give the hydration error 
  // return <Component {...pageProps} />

}

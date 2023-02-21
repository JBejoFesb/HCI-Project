import '../styles/globals.css';
import { useState, useEffect } from 'react';
import userbase from 'userbase-js';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  useEffect(() => {
    userbase.init({appId: process.env.REACT_APP_USERBASE_APP_ID as string})
  }, []);

  return <Component user={user} {...pageProps} />
}
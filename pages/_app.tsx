import '../styles/globals.css';
import { useState, useEffect } from 'react';
import userbase, { UserResult } from 'userbase-js';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserResult>();
  useEffect(() => {
    userbase.init({appId: process.env.REACT_APP_USERBASE_APP_ID ? process.env.REACT_APP_USERBASE_APP_ID : "error" })
    .then(session => session.user && setUser(session.user))
  }, []);

  console.log(user);

  return <Component user={user} {...pageProps} />
}
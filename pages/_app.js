import '@/styles/globals.css'
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '@/components';
import { StateContext } from '@/context/StateContext';
import { Analytics } from '@vercel/analytics/react';


 function App({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Toaster />
        <Component {...pageProps} />
        <Analytics />
    </Layout>
  </StateContext>
  )
}

export default App

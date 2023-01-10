import Head from 'next/head';
import { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 py-2 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

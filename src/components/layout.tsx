import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <main className="container">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </main>
  );
};

export default Layout;

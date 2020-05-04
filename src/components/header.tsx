import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
    </header>
  );
};

export default Header;

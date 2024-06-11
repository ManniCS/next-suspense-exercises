import React from 'react';
import Link from 'next/link';

import HeaderNavigation from './HeaderNavigation'

function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <React.Suspense>
        <HeaderNavigation/>
      </React.Suspense>
    </header>
  );
}

export default SiteHeader;

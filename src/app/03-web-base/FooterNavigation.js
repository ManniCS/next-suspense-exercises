import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

async function FooterNavigation() {
  const navLinks = await getNavLinks();

  return (
    <nav>
      <ol>
        {navLinks.map(
          ({ slug, label, href }) => (
            <li key={slug}>
              <Link href={href}>
                {label}
              </Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default FooterNavigation;

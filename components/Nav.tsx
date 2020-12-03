// eslint-disable-next-line no-use-before-define
import React from 'react';
import Link from 'next/link';

export const Nav = (): JSX.Element => (
  <nav>
    <Link href="/">
      <a>Films</a>
    </Link>
    <Link href="/people">
      <a>People</a>
    </Link>
    <Link href="/planets">
      <a>Planets</a>
    </Link>
    <Link href="/species">
      <a>Spacies</a>
    </Link>
    <Link href="/starships">
      <a>Starships</a>
    </Link>
    <Link href="/vehicles">
      <a>Vehicles</a>
    </Link>
  </nav>
);

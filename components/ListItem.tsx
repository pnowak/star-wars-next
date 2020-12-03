import React, { ReactElement } from 'react';
import Link from 'next/link';

type CardProps = {
  category: string;
  name: string;
};

export const ListItem = ({ category, name }: CardProps): ReactElement => {
  const href = `${category}/${name}`;

  return (
    <Link href={href} as={`${category}/${name}`}>
      <div>
        <h1>{name}</h1>
        <span>{category}</span>
      </div>
    </Link>
  );
};

import * as React from 'react';
import { ListItem } from './ListItem';
import { Common, CommonAttributes } from '../interfaces/rest.interface';

type RestProps = {
  items: Common;
  category: string;
};

export const RestList = ({ items, category }: RestProps) => (
  <ul>
    {items.data.map((item: CommonAttributes) => (
      <li key={item.created}>
        <ListItem category={category} name={item.name} />
      </li>
    ))}
  </ul>
);

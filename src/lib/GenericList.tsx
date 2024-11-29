import { ReactNode } from 'react';

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usecase
/*
{
  <List items={['a', 'b']} renderItem={(item) => <li key={item}>{item}</li>} />
}
*/

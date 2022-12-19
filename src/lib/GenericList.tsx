import { ReactNode } from 'react';

export interface ListProps<ListItem> {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}

export const List = <ListItem extends unknown>({
  items,
  render,
}: ListProps<ListItem>) => {
  return (
    <ul>
      {items.map(render)}
      {/* {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))} */}
    </ul>
  );
};

// Usecase
/*
{
  <List items={['a', 'b']} render={(item) => <li key={item}>{item}</li>} />
}
*/

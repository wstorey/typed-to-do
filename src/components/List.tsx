import React, { useState } from 'react';
import { Item } from './Item';

interface ListItem {
    name: string;
    complete: boolean;
    key: number;
}

interface ListItems extends Array<ListItem>{}

export const List = () => {
    // const [items, setItems] = useState<Items>([]);
    const [items] = useState<ListItems>([
        {name: 'test1', complete: false, key: 1},
        {name: 'test2', complete: false, key: 2},
        {name: 'test3', complete: false, key: 3},
    ]);

    // setItems([
    //     {name: 'test1', complete: false, key: 1},
    //     {name: 'test2', complete: false, key: 2},
    //     {name: 'test3', complete: false, key: 3},
    // ])

    return (
        <ul>
            {items.map((item, i) => {
                console.log(item);
                return <Item
                    name={item.name}
                    complete={item.complete}
                    key={i}
                />
            })}
        </ul>
    )
}

//! Ref
// type AppProps = { message: string }; /* could also use interface */
// const App = ({ message }: AppProps) => <div>{message}</div>;
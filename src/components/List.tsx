import React, { useEffect, useState } from 'react';
import { Item } from './Item';

interface ListItem {
    name: string | number | readonly string[] | undefined;
    complete: boolean;
    key: number;
}

interface ListItems extends Array<ListItem>{}

export const List = () => {
    const [items, setItems] = useState<ListItems>([]);
    const [newItem, setNewItem] = useState<string | number | readonly string[] | undefined>('');
    const [itemKey, setItemKey] = useState<number>(4);

    useEffect(() => {
        setItems([
            {name: 'test1', complete: false, key: 1},
            {name: 'test2', complete: false, key: 2},
            {name: 'test3', complete: false, key: 3},
        ]);
    }, []);

    const addItemToList = () => {
        if(newItem === '' || newItem === undefined) {
            return;
        }
        setItems(listOfItems => [ ...listOfItems, {name: newItem, complete: false, key: itemKey} ]);
        setItemKey(itemKey + 1);
        setNewItem('');
    }

    console.table(items);

    return (
        <div>
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
            <input 
                type="text" 
                id="newItem" 
                name="newItem" 
                onChange={e => setNewItem(e.target.value)} 
                value={newItem} />
            <button onClick={addItemToList}>Add Item</button>
        </div>
    );
}

//! Ref
// type AppProps = { message: string }; /* could also use interface */
// const App = ({ message }: AppProps) => <div>{message}</div>;
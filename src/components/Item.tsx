import React from 'react';

interface Props {
    name: string;
    complete: boolean;
    key: number;
}

export const Item = ({name, complete}: Props) => 
    <li>
        {/* <input type="radio" onChange={}  /> */}
        {name}
        {complete ? ' -  done' : ''}
    </li>


//! Ref
// type AppProps = { message: string }; /* could also use interface */
// const App = ({ message }: AppProps) => <div>{message}</div>;
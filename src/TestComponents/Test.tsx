import React, { useState, useRef } from 'react';

interface Person {
    firstname: string;
    lastName: string;
}

interface Props {
    text: string;
    okay?: boolean;
    i?: number;
    fn?: (bob: string) => string; // void, number, etc.
    obj?: {
        field1: string
    }
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({
    handleChange,
}) => {
    const [count, setCount] = useState<number | null | undefined>(5);
    // const [text, setText] = useState<{ text: string }>({text: 'hello'});
    const [text, setText] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

// <TextField text='hello' person={{firstname: '', lastName: ''}} 
// handleChange={e => {}}
// />

// <Counter>
//     {({ count, setCount }) => (
//         <div>
//             {count}
//             <button onClick={() => setCount(count + 1)}>++</button>
//         </div>
//     )}
// </Counter>
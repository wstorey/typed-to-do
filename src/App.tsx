import React from 'react';
import { Counter } from './TestComponents/Count';
import { TextField } from './TestComponents/Test';

function App() {
    return (
        // <TextField text='hello' person={{firstname: '', lastName: ''}} 
        // handleChange={e => {}}
        // />
        
        <Counter>
            {({ count, setCount }) => (
                <div>
                    {count}
                    <button onClick={() => setCount(count + 1)}>++</button>
                </div>
            )}
        </Counter>
        
    );
}

export default App;

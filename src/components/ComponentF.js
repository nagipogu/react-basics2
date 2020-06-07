import React, {useContext} from 'react';
import { CountContext } from '../App';

function ComponentF(props) {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F - {countContext.countState}
            {/* <div>Count - {count}</div> */}
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentF;
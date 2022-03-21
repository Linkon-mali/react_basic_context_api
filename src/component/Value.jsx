import React, { useContext } from 'react';
import Context from '../context/context';
import Calculate from './Calculate';

const Value = () => {
    // const {value, tasks} = useContext(Context);
    const {state, setData} = useContext(Context);
  return (
    <div>
        Value - {state.value}
        <br/>
        <input type='text' onChange={e => setData({...state, value: e.target.value})} />
        <br/>
        <button onClick={(e) => setData({...state, value: 20})}>Update</button>
        <br/>
        {/* <Calculate value={value} tasks={tasks} /> */}
        <Calculate />
    </div>
  )
}

export default Value
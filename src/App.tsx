import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state'


function App() {
  const dispatch = useDispatch()
  const { _increment, _decrement, _reset} = bindActionCreators(actionCreators, dispatch)
  const test = useSelector((state: State) => state.test)
  

  return (
    <div className="App">
      <h1>{test}</h1> 
      <button onClick={()=> _increment(1)}>+</button>
      <button onClick={()=> _decrement(1)}>-</button>
      <button onClick={()=> _reset()}>reset</button>
    </div>
  )
}

export default App

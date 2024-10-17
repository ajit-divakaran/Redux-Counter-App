import { Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { changeRange, decrement, increment, reset } from "./redux/counterSlice";
import { useState } from "react";
function App() {
  const countState = useSelector(state => state.counter.value)
  const [input,setInput] = useState("") 
  const dispatch = useDispatch() /* call action */
  return (
    <>
      <div className="row w-100 p-0 m-0 vh-100  bg-secondary">
        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
          <div className="p-5 bg-dark rounded">
            <h2 className="mt-1" style={{color:'white'}}>Counter Application</h2>
            <p style={{ fontSize: "5rem",color:'white' }} className="my-4 text-center">
              {countState}
            </p>
            <div className="d-flex gap-3 mb-4">
              <Button onClick={()=>dispatch(decrement())} variant="warning">Decrement</Button>
              <Button onClick={()=>dispatch(reset())} variant="danger">Reset</Button>
              <Button onClick={()=>dispatch(increment())} variant="success">Increment</Button>
            </div>
<div className="d-flex gap-2">
              <input type="text" onChange={(e)=>setInput(e.target.value)}className="rounded w-100 p-2" placeholder="Enter the Range" />
              <Button variant="primary" onClick={()=>dispatch(changeRange(Number(input)))}>Click</Button>
  
</div>          </div>
        </div>
        <div className="col-md-2 d-none d-md-block "></div>
      </div>
    </>
  );
}

export default App;

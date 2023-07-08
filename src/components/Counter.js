import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

import {multyplTwo, divideOnTwo, reset} from '../store/slices/counter.slice'

export const Counter = () => {
   const dispatch=useDispatch();
   const count = useSelector(state => state.counter);
   const handleMultypl = () => dispatch(multyplTwo());
   const handleDivide = () => dispatch(divideOnTwo());
   const handleReset = () => dispatch(reset());
   
   return (
      <Fragment>
         <h3>
            Count: {count}
         </h3>
         <button data-testid = "multyBtn" onClick={handleMultypl}>X*2</button>
         <button data-testid = "resetBtn" onClick={handleReset}>Reset</button>
         <button data-testid = "divideBtn" onClick={handleDivide}>X/2</button>
      </Fragment>
   )
}



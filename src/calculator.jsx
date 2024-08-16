import React, { useReducer } from "react";

// Define the initial state
const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.currentValue === "0" && action.payload === "0") return state;
      if (state.currentValue === "0" && action.payload !== ".") {
        return { ...state, currentValue: action.payload };
      }
      if (state.currentValue.includes(".") && action.payload === ".") return state;
      return { ...state, currentValue: state.currentValue + action.payload };

    case "CHOOSE_OPERATOR":
      if (state.operator != null) return state;
      return {
        ...state,
        operator: action.payload,
        previousValue: state.currentValue,
        currentValue: "0",
      };

    case "CLEAR":
      return initialState;

    case "EVALUATE":
      if (state.operator == null || state.previousValue == null) return state;
      const result = evaluate(state);
      return {
        ...state,
        currentValue: result.toString(),
        operator: null,
        previousValue: null,
      };

    default:
      return state;
  }
};

// Define the evaluate function
const evaluate = ({ currentValue, previousValue, operator }) => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) return "";

  switch (operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return current;
  }
};


const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <div className="calculator">
        <div className="display">{state.currentValue}</div>
        <div className="buttons">
          <button onClick={() => dispatch({ type: "CLEAR" })}>AC</button>
          <button onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "/" })}>/</button>
          <button onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "*" })}>*</button>
          <button onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "-" })}>-</button>
          <button onClick={() => dispatch({ type: "CHOOSE_OPERATOR", payload: "+" })}>+</button>
          <button onClick={() => dispatch({ type: "EVALUATE" })}>=</button>
  
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
            <button key={digit} onClick={() => dispatch({ type: "ADD_DIGIT", payload: digit.toString() })}>
              {digit}
            </button>
          ))}
          <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: "." })}>.</button>
        </div>
      </div>
    );
  };
  
  export default Calculator;
  
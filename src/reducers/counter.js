//Este reducer hace el increment o decrement de 1 en 1. No obstante, si quiero determinar un número para hacer el increment/decrement,
//No lo puedo hacer.
// const initialState = 0;
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// export default counterReducer;

//Para hacer el increment/decrement de a batches, puedo utilizar el payload.
const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;

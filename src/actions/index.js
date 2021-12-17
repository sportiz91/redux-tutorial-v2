//Con estas actions, lo que podemos hacer es increment o decrement de 1 en 1. No obstante, si quisiera hacer el increment o decrement supongamos
//De a 5, u otro número que determine, no lo puedo hacer.
// export const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

//Para hacer el increment o decrement de a batches, puedo utilizar la segunda propiedad del objeto, el data (payload):
export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: "DECREMENT",
    payload: number,
  };
};

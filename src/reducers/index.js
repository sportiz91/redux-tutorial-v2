import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

//combineReducers es una función que en su interior tiene un ojeto.
//El nombre que le des a la propiedad del objeto de combineReducers puede ser cualquiera. Es decir,
//Vos podés llamar al reducer como quieras. Luego podrás acceder al reducer con el nombre de la propiedad.
const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

//Si quieras el mismo nombre con el que importaste los files, podrías hacer:
// const rootReducers = combineReducers({
//   counterReducer,
//   isLoggedReducer,
// });
//Lo anterior es sinónimo de:
//Si quieras el mismo nombre con el que importaste los files, podrías hacer:
// const rootReducers = combineReducers({
//   counterReducer: counterReducer,
//   isLoggedReducer: isLoggedReducer,
// });

export default rootReducers;

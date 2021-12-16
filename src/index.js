import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducers from "./reducers"; //Importante, acá no tenemos que agregar: "./reducers/index". Cuando queremos buscar index lo hace automáticamente.
import { Provider } from "react-redux"; //Queremos importar el Provider para poder conectar nuestra React App con Redux. Básicamente lo que hace esta App
//Es conectar nuestro GLOBAL STORE a nuestra App. Y TODA TU APP TIENE QUE ESTAR WRAPPEADA EN EL PROVIDER CONTAINER.

//Acá tenemos un problema. Tenemos dos reducers en vez de uno solo. No podemos pasar: createStore(counterReducer, isLoggedReducer).
//Lo que podemos hacer es combinar reducers. Básicamente lo que haremos en este caso es tomar todos los reducers que hayamos definido y combinarlos
//Todos en uno solo. Por eso, dentro de reducers, hay un file que se llama index.js que básicamente es el que me combina todos los reducers en uno solo gigante.

//Ahora bien, lo que quiero hacer es visualizar la STORE en mi BROWSER. Para eso se puede utilizar una extensión muy cómoda:
//redux-devtools-extension. Por eso, como segundo parámetro, agregamos ese choclo.
//Inicialmente, cuando loademos la página, veremos en nuestra redux devtools (luego de haber instalado la devtool en el store) los states iniciales:
//counter = 0 + isLogged = false.
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Notar que toda nuestra App debe estar wrappeada por el Provider. El Provider solo llevar un custom attribute que sería: store={store}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

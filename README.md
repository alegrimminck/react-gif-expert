# Aprendido en React

## Functional components
Los functional components son la base de como funciona react, son archivos que representan un componente dentro de la aplicación que se esté creando y la gracia es que funcionan por si solos. Se llaman "Functional" porque literalmente son una función de JS, esta se puede exportar para ser llamada desde algún otro componente utilizando una etiqueta XML.
```jsx
// Ejemplo functional component
function FirstApp() {
  return <h1>Hello world!</h1>;
}
```
## Component State
El estado de un componente es un objeto que se usa para guardar data. El estado puede cambiar con el tiempo y cada vez que cambia el componente se re-renderiza. El estado puede cambiar debido a una acción del usuario o a un evento generado por el sistema.
## Hooks
Los hooks son una nueva característica implementada en React 16.8. El hook lo que hace es añadirle un estado a un functional component sin la necesidad de crear una clase. Existen múltiples hooks y en esta sección se vieron 3 tipos.
- **useState** 
Se utiliza normalmente para añadir un estado local, react va a presevar este estado entre re-renderizaciones del componente. 
Ejemplos de uso: Contador, Guardar data de una API, Intercambiar valores booleanos.
```js
const [count, setCount] = useState(0);
setCount((count) => count + 1);
```
- **useEffect**
Se utiliza para realizar un efecto con alguna condición, la gracia es que no se vuelve a ejecutar por cada renderización de un componente, el segunto argumento si se entrega vacío solo se ejecutara la primera vez que se cree un componente, por ejemplo en el caso de querer hacer un fetch o la utilización de un timer que cambie un valor solamente una vez.
```js
useEffect(() => {
  //Runs only on the first render
}, []);
```
- **customHook**
Se pueden crear hooks por parte del usuario, estos son necesarios cuando se necesita utilizar una lógica de un componente en múltiples componentes, se puede extraer esa lógica y almacenarla en un custom Hook. Todos los Custom hooks comienzan con "use". Ejemplo useFetch.
```js
// Custom Hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

// Importación del custom hook y uso
import useFetch from './useFetch.js'
const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

```
## Props
Los props son las propiedades que se envían como argumentos en los functional components, "props" es un objeto que llega al componente el cual contiene dentro las propiedades enviadas en formato keys:value. Se pueden agregar condiciones a las props para que llegue un tipo de dato en específico o incluso validar si se ingresó la prop.
```jsx
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```
## Imports & Exports
Para exportar se puede hacer directamente en la variable o al final del archivo indicando la variable en específico, además se puede agregar la palabra especial "default", la cual permite que por defecto se exporte eso y cuando se importe ese archivo se puede agregar cualquier palabra para asginarse a lo importado.
```js
//name.js
const person = {
    name:'Kedar'
}
export default person;

//other.js
import person from './name.js'
//or use as below
import prs from './name.js`
```

```js
//info.js
export const age = 23;
export const birth_country = "India"

//other.js
import {age, birth_country} from './info.js'
```
## Fetch a API
El fetch es una promesa que genera una petición http a un URL en específico, al ser una promesa es código asíncrono por lo cual se debe manejar con el .then o con el async await, normalmente una petición uno la quiere realizar una vez, por lo que se puede utilizar el hook useEffect para ejecutarla solo la primera vez que se renderiza un componente.
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  ```
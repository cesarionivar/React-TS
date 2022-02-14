import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <Usuario />

      <h2 className='mt-5'>UseEffect</h2>
      <hr />

      {/* <TimerPadre /> */}

      <h2 className='mt-5'>useReducer</h2>
      <hr />

      <ContadorRed />
      <br />
      <br />

      <h2>Custom Hooks</h2>
      <hr />

      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;

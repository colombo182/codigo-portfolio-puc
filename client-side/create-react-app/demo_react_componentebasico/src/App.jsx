import './App.css'
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido} from './components/AloMundoColorido';

function App() {
  return (
    <>
      <AloMundo />
      <AloMundoColorido nome="Pedro" cor="red"/>
    </>
  );
}

export default App

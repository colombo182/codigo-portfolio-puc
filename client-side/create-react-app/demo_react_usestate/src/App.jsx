import './App.css';
import { Contador } from './components/Contador';


function App() {
  const handleClick = (event) => {
    alert(`Clicou ${event.currentTarget.id}`);
  };

  return (
    <>
      <Contador />
    </>
  );
}

export default App
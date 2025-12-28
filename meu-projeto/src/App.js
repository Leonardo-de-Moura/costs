
import './App.css';         
import SayMyName from './components/SayMyName';  
import Pessoa from './components/Pessoa';

function App() {
  const nome = "maria"
 
  return (
    <div className="App">
    <SayMyName nome="matheus"/>
    <SayMyName nome={nome}/>
<Pessoa
nome ="rodrigo" foto ="https://img" idade="28" profissao="pedreiro"
/>
    </div>
  );
}

export default App;

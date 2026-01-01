
import './App.css';         
import SayMyName from './components/SayMyName';  
import Pessoa from './components/Pessoa';
import Frase from "./components/Frase"
import List from "./components/List"

function App() {
  const nome = "maria"
 
  return (
    <div className="App">
      <List></List>
    <SayMyName nome="matheus"/>
    <Frase />
    <SayMyName nome={nome}/>
<Pessoa
nome ="rodrigo" foto ="https://img" idade="28" profissao="pedreiro"
/>
    </div>
  );
}

export default App;


import './App.css';         
import SayMyName from './components/SayMyName';  
import Pessoa from './components/Pessoa';
import Frase from "./components/Frase"
import List from "./components/List"
import Evento from "./components/Evento"
import Form from "./components/Form"

function App() {
  const nome = "maria"
 
  return (
    <div className="App">
      <Evento />
      <List></List>  
    <SayMyName nome="matheus"/>
    <Frase />
    <SayMyName nome={nome}/>
<Pessoa
nome ="rodrigo" foto ="https://img" idade="28" profissao="pedreiro"
/>

<Form/>
    </div>
  );
}

export default App;

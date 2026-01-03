

function Evento (){

	function MeuEvento(){
		alert("ativado completamente")
	}
	return (
		<>
		<p>
			Clique pra disparar o evento:
		</p>
		<button onClick={MeuEvento}>
			ativar
		</button>
		</>
	)
 }
 export default Evento
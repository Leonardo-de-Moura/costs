import Button from "./Button.js"

function Evento() {

	function MeuEvento() {
		alert("ativado ")
	}
	function segundoEvento() {
		alert("segundo evt")
	}
	return (
		<>
			<p>
				Clique pra disparar o evento:
			</p>
			
			<Button event={MeuEvento} text="primeiro evento" />
			<Button event={segundoEvento} text="segundo evento" />

		</>
	)
}
export default Evento
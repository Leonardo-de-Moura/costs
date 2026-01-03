function Form() {

	function cadastrarusuario(event) {
		event.preventDefault()
		console.log("cadastrou")
	}
	return (
		<>
			<main>
				<h1>meu formulário</h1>
				<form onSubmit={cadastrarusuario}>
					<div>
						<input type="text" placeholder="digite" />

					</div>
					<div>
						<input type="submit" placeholder="cadastrar" />

					</div>
				</form>
			</main>
		</>
	)
}
export default Form
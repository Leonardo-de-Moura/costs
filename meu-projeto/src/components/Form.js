import { useState } from "react"


function Form() {

	function cadastrarusuario(event) {
		event.preventDefault()
		console.log(name)
		console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
	}

	const [name, setName] = useState()
	const [password, setPassword] = useState()
	return (
		<>
			<main>
				<h1>meu formulário</h1>
				<form onSubmit={cadastrarusuario}>
					<div>
						<label htmlFor="name">Nome</label>
						<input type="text" placeholder="digite" id="name" onChange={(e) => { setName(e.target.value) }} />

					</div>
					<div>
						<label htmlFor="pass">Senha</label>
						<input id="pass" type="password" placeholder="digite a senha" onChange={(e) => {
							setPassword(e.target.value)
						}} />
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
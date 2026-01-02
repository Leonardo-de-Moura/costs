import Item from "./Item.js"
function List() {
	return (
		<>
			<h1>minha lista</h1>
			<ul>
				<Item marca="ferrari"  AnoLancamento={1985}/>
				<Item marca="lAMBORGHINI" AnoLancamento={2008}/>
				<Item  />
				<Item marca="fiat" />
				<Item marca="fiat" />
			</ul>
		</>
	)
} export default List
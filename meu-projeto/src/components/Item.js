import PropTypes from 'prop-types'

function Item({marca, AnoLancamento}){
return(
	<>
	<li>{marca} - {AnoLancamento}</li>
	</>
)
}

Item.propTypes = {
	marca: PropTypes.string.isRequired,
	AnoLancamento: PropTypes.number
}

Item.defaultProps = {
	marca: 'faltou marca'

}
export default Item
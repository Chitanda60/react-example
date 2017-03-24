
const CounterItem = ({value, onAdd, onDes, onShow, onHide, onSearch, onLink}) => (
	<div>
		<h1>{value}</h1>
		<div className="add" onClick={onAdd}>ADD</div>
		<div className="dec" onClick={onDes}>DES</div>
		<div className="show" onClick={onShow}>SHOW</div>
		<div className="hide" onClick={onHide}>HIDE</div>
		<div className="search" onClick={onSearch}>SEARCH</div>
		<div className="link" onClick={onLink}>LINK</div>
	</div>
)

export default CounterItem
function Nat(props){
	return (
		<div>
			<h1>Hello, Nat!</h1>
			<h2>icon</h2>
		</div>
  );
}

function render() {
	ReactDOM.render(
		Nat(),
	    document.getElementById('nat')
	);
}
render();
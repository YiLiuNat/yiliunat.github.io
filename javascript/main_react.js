function Nat(props) {
	return (
		<div>
			<h1>Hello, Nat!</h1>
			<h2>icon1</h2>
			<a href="/fyp">Final Year Project</a>
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
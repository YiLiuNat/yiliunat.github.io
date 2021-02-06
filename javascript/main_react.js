class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, Nat!</h1>
				<h2>Yi Liu</h2>
				<a href="/fyp">Final Year Project</a>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('nat')
);


// function Nat(props) {
// 	return (
// 		<div>
// 			<h1>Hello, Nat!</h1>
// 			<h2>Yi Liu</h2>
// 			<a href="/fyp">Final Year Project</a>
// 		</div>
// 	);
// }



// function render() {
// 	ReactDOM.render(
// 		Nat(),
// 		document.getElementById('nat')
// 	);
// }
// render();
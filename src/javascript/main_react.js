class Main extends React.Component {
	render() {
		return (
			<div>
				<Title />
			</div>
		);
	}
}

class Title extends React.Component {
	render() {
		return (
			<div id="title">
				<h1>Hello, Nat!</h1>
				<h2> Yi Liu </h2>
				<div id="fypTitle"> 
					<a href = "/fyp" > Final Year Project </a>
					<div id="fypDetail">
						<p>Researched mainly on the online-map interaction topics, with JavaScript as the main programming language. Provided an integrated solution for student timetables and
campus path planning system via the user-centred design; Planed a path automatically for students to reach their lecture buildings based on their timetable.</p>
					</div>
				</div>
				 
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
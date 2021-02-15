class Main extends React.Component {
	render() {
		return (
			<div>
				<Menu />
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
					<p>Developed an online mobile web-app, which has been designed to behave like a native mobile app (compatible with both Android and iOS system); Allowed visitors to navigate university’s landmarks or buildings, and enabled students to upload their timetables for an automatically updated map that helped them plan paths for their next lectures.</p>

					</div>
				</div>
				 
			</div>
		);
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div id="menu">
				<button
					id="projectsBtn"
					onClick={() => alert("Project")}
				>
					PROJECT
				</button>
				<button
					id="aboutBtn"
					onClick={() => window.location.href="/"}
				>
					ABOUT
				</button>
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
class Title extends React.Component {
	render() {
		return (
			<div id="title">
				<h1>Hello, Nat!</h1>
				<h2> Yi Liu </h2>
			</div>
		);
	}
}

class Project extends React.Component {
	render() {
		return (
			<div id="fypProject"> 
				<div id="fypTitle">
					<a href = "/fyp" target="_blank"> Final Year Project </a>
				</div>
				<div id="fypDetail">
					<p>Researched mainly on the online-map interaction topics, with JavaScript as the main programming language. Provided an integrated solution for student timetables and
		campus path planning system via the user-centred design; Planed a path automatically for students to reach their lecture buildings based on their timetable.</p>
					<p>Developed an online mobile web-app, which has been designed to behave like a native mobile app (compatible with both Android and iOS system); Allowed visitors to navigate university’s landmarks or buildings, and enabled students to upload their timetables for an automatically updated map that helped them plan paths for their next lectures.</p>

				</div>
			</div>
		);
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showTitle: true,
			showProject: false
		};
	}


	//当点击Project按钮时将showTitle设为false(隐藏title)
	clickProjectBtn() {
		this.setState({
			showTitle: false,
			showProject: true
		});
		console.log(this.state);
	}

	clickNameBtn() {
		this.setState({
			showTitle: true,
			showProject: false
		});
		console.log(this.state);
	}

	render() {
		const {
			showTitle,
			showProject
		} = this.state;

		return (
			<div>
				<div id="menu">
					<button
						id="nameBtn"
						onClick={this.clickNameBtn.bind(this)}
					>
						YI LIU (柳沂)
					</button>
					<button
						id="aboutBtn"
						onClick={() => window.location.href="/"}
					>
						ABOUT
					</button>
					<button
						id="projectsBtn"
						onClick={this.clickProjectBtn.bind(this)}
					>
						PROJECT
					</button>
				</div>
				

				{
					showTitle ? (<Title />) : null //是否显示Titile
				}

				{
					showProject ? (<Project />) : null
				}

			</div>
		);
	}

}


// class Menu extends React.Component {
// 	render() {
// 		return (
// 			<div id="menu">
// 				<button
// 					id="nameBtn"
// 					onClick={() => window.location.href="/"}
// 				>
// 					YI LIU (柳沂)
// 				</button>
// 				<button
// 					id="aboutBtn"
// 					onClick={() => window.location.href="/"}
// 				>
// 					ABOUT
// 				</button>
// 				<button
// 					id="projectsBtn"
// 					onClick={()=> this.setState({display.false})}
// 				>
// 					PROJECT
// 				</button>


// 			</div>
// 		);
// 	}
// }


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
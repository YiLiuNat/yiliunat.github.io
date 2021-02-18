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

class Projects extends React.Component {
	render() {
		return (
			<div id="projectSection"> 
				<div id="projectTitle">
					<a href = "/fyp" target="_blank"> Final Year Project </a>
				</div>
				<div id="projectDetail">
					<p>Researched mainly on the online-map interaction topics, with JavaScript as the main programming language. Provided an integrated solution for student timetables and
		campus path planning system via the user-centred design; Planed a path automatically for students to reach their lecture buildings based on their timetable.</p>
					<p>Developed an online mobile web-app, which has been designed to behave like a native mobile app (compatible with both Android and iOS system); Allowed visitors to navigate university’s landmarks or buildings, and enabled students to upload their timetables for an automatically updated map that helped them plan paths for their next lectures.</p>

				</div>
				<div id="projectTitle">
					<a href = "https://github.com/YiLiuNat/YiLiu-Dissertations/blob/master/2018-11%20A%20Meal%20Planning%20System%20to%20Support%20Students%20%E2%80%98Eating%20Well%E2%80%99/Dissertation.pdf" target="_blank">
						Human Computer Interaction Project
					</a>
				</div>
				<div id="projectDetail">
					<p>Gathered requirements of the project, with online questionnaire designed to find the target users; Conducted interviews with users to further learn about the user requirements. Designed a system to support students ‘Eating Well’ and provided different solutions for different user requirements.</p>
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
			showProjects: false
		};
	}


	//当点击Project按钮时将showTitle设为false(隐藏title)
	clickProjectBtn() {
		this.setState({
			showTitle: false,
			showProjects: true
		});
		console.log(this.state);
	}

	clickNameBtn() {
		this.setState({
			showTitle: true,
			showProjects: false
		});
		console.log(this.state);
	}



	render() {
		const {
			showTitle,
			showProjects
		} = this.state;

		return (
			<div>
				<div id="menu">
					<button
						id="nameBtn"
						onClick={() => window.location.href="/" /*onClick={this.clickNameBtn.bind(this)} 原版SPA显示隐藏组件方法*/}
						
					>
						<span id="nameEng">YI LIU &nbsp;</span><span id="nameCHN">柳 沂</span>
					</button>
					<button
						id="aboutBtn"
						onClick={() => window.location.href="/"}
					>
						ABOUT
					</button>
					<button
						id="projectsBtn"
						onClick={
							function() {
								window.location.href="#!projects";
								window.location.reload();
								/*this.clickProjectBtn.bind(this)} 原版SPA显示隐藏组件方法*/
							}
						}
					>
						PROJECTS
					</button>
					<button
						id="funStuffBtn"
						onClick={
							function(){
								window.location.href="#!projects";
								window.location.reload();
							}
						}
					>
						FUN STUFF
					</button>
				</div>
				
				{(window.location.hash == "#!projects")?(document.title="Projects - Yi Liu 项目", <Projects />):null}
				{/*showProjects ? (<Projects />) : null*/}
				{(window.location.hash == "")?(<Title />):null}


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
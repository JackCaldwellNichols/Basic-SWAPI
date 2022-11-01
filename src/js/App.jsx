import React, {useState, useEffect} from "react";
import Navbar from "./component/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Home from "./component/Home.jsx";
import People from "./component/People.jsx";
import Planets from "./component/Planets.jsx";

//create your first component
const App = () => {
	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])

	useEffect(() =>{
		async function fetchPeople() {
			let res = await fetch('https://swapi.dev/api/people')
			let data = await res.json();
			setPeople(data.results)
		}

		async function fetchPlanets() {
			let res = await fetch('https://swapi.dev/api/planets')
			let data = await res.json();
			setPlanets(data.results)
		}
	fetchPeople();
	fetchPlanets();	
	}, [])

	
	return (
		<div className="text-center">
			<Router>
				<Navbar />
				<Container>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people">
							<People data={people}/>
						</Route>
						<Route exact path="/planets">
							<Planets data={planets}/>
						</Route>
					</Switch>
				</Container>
			</Router>
		</div>
	);
};

export default App;

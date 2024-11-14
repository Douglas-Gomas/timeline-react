import React from "react";
import { getData } from "./timelineItems.js";
import Scheduler from "./components/Scheduler";
import "./App.css";

const App = () => (
	<div className="app">
		<h1 className="app-title">Scheduler</h1>
		<div className="scheduler-container">
			<Scheduler
				events={getData()}
			/>
		</div>
	</div>
);

export default App;
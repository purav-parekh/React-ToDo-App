import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<React.Fragment>
			<h1>About</h1>
			<p>
				This is a ToDo List App that I created as part of learning React. <br />{" "}
				This is the first app that I created following{" "}
				<a href="https://youtu.be/XuFDcZABiDQ" target="__blank">
					Brad Traversy's React Crash Course.
				</a>{" "}
				<br />
				This has also been pushed to{" "}
				<a href="https://www.github.com/purav-parekh" target="__blank">
					my github profile
				</a>
				. <br />
				The link to the repo is{" "}
				<a href="https://www.github.com/purav-parekh" target="__blank">
					here.
				</a>{" "}
			</p>
		</React.Fragment>
	);
}

export default About;

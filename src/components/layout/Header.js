import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<header style={headerStyle}>
				<h3 style={{ margin: "0" }}>ToDo App</h3>
				<Link style={linkStyle} to="/">
					Home
				</Link>{" "}
				|{" "}
				<Link style={linkStyle} to="/about">
					About
				</Link>
				{/* <button style={addBtnStyle}>Add</button> */}
			</header>
		</div>
	);
}

const headerStyle = {
	textAlign: "center",
	margin: "0",
	color: "#fff",
	padding: "5px",
	fontSize: "30px",
	backgroundColor: "#333",
};

const linkStyle = {
	textDecoration: "none",
	color: "#fff",
	fontSize: ".8em",
};

// const addBtnStyle = {
// 	display: "inline-block",
// 	background: "green",
// 	border: "none",
// 	borderRadius: "10px",
// 	padding: "8px",
// };
export default Header;

import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
	getStyle = () => {
		return {
			background: "#f4f4f4",
			padding: "5px",
			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{title}{" "}
					<input
						style={deleteBtnStyle}
						onClick={this.props.delTodo.bind(this, id)}
						name="delete"
						id="delete-btn"
						class="btn btn-primary"
						type="button"
						value="X"
					/>
				</p>
			</div>
		);
	}
}

//propTypes
Todoitem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

const deleteBtnStyle = {
	background: "red",
	padding: "8px 15px",
	color: "black",
	border: "none",
	borderRadius: "50%",
	float: "right",
	cursor: "pointer",
	margin: "0",
};
export default Todoitem;

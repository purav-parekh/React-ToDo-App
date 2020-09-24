import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
	state = {
		title: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: "" });
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
				<input
					type="text"
					name="title"
					placeholder="Add Item"
					style={{ padding: "5px", flex: "8" }}
					onChange={this.onChange}
				/>
				<button
					type="submit"
					class="btn btn-primary"
					style={{
						padding: "6px",
						flex: "2",
						backgroundColor: "#333",
						color: "#fff",
						border: "none",
						margin: "auto 0",
					}}
				>
					Add
				</button>
			</form>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.object.isRequired,
};

export default AddTodo;

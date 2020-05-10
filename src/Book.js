import React, { Component } from 'react';

export default class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
			showInfo: false
		};
	}

	handleInfo = () =>
		this.setState({
			showInfo: !this.state.showInfo
		});

	render() {
		//console.log(this.props);
		const { id, book, author, img } = this.props.book;
		const { handleDelete } = this.props;

		return (
			<article className="book">
				<img src={img} alt="" />
				<div>
					<h4>
						Book: {book} ID: {id}
					</h4>
					<h5>Author: {author}</h5>
					<button onClick={() => handleDelete(id)}>Delete Me</button>
					<button onClick={this.handleInfo}>Toogle Info</button>
					{this.state.showInfo ? (
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book
						</p>
					) : null}
				</div>
			</article>
		);
	}
}

import React, { Component } from 'react';
import Book from './Book';
import dataBook from './dataBook';

export default class BookList extends Component {
	state = {
		books: dataBook
	};

	handleDelete = (id) => {
		//teknik seolah-olah delete menggunakan filter
		const sortedBooks = this.state.books.filter((item) => item.id !== id);
		this.setState({
			books: sortedBooks
		});
	};

	render() {
		return (
			<div>
				<h2>This is our Book List</h2>
				{this.state.books.map((item) => <Book book={item} key={item.id} handleDelete={this.handleDelete} />)}
			</div>
		);
	}
}

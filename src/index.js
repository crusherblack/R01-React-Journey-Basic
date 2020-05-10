import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Person = ({ img, name, job, children }) => {
	const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
	return (
		<article className="person">
			<img src={url} alt="person image" />
			<h4>{name}</h4>
			<h4>{job}</h4>
			<p>{children}</p>
		</article>
	);
};

const PersonList = () => {
	return (
		<section className="personList">
			<Person img="34" name="John" job="developer">
				<p>This my 1</p>
			</Person>
			<Person img="21" name="Bob" job="doctor">
				<p>This my 2</p>
			</Person>
			<Person img="22" name="David" job="driver">
				<p>This my 3</p>
			</Person>
		</section>
	);
};
ReactDom.render(<PersonList />, document.getElementById('root'));

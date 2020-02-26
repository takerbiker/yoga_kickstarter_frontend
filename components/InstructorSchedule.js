import fetch from 'isomorphic-unfetch'; // For fetch API
import Head from 'next/head';
// import { Component } from 'react';
// import Link from 'next/link';
// import Layout from './MyLayout';
// import { post } from 'axios';

export default class InstructorSchedule extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('Prop is ' + this.props.value);

		return (
			<div>
				<Head>
					<title>Yoga Kickstarter</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>
				<div className="container containerB">
					<p>
						<i>
							Get ready to start your journey! You have chosen <b>{this.props.value}</b> as your first
							one-on-one session. More information will be sent to your email.
						</i>
					</p>
				</div>

				<style jsx>
					{`
						.containerB {
							padding: 5px;
							margin: 2px;
						}
					`}
				</style>
			</div>
		);
	}
}

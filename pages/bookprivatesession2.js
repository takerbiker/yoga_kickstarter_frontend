import LayoutOut from '../components/MyLayoutOut';
import InstructorSchedule from '../components/InstructorSchedule';
import Link from 'next/link';

// import Link from 'next/link';
import Head from 'next/head';

import { Component } from 'react';
import { useRouter } from 'next/router';

export default class bookPrivateSession2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// booked   : false,
			// comments : '',
			value         : '',
			showComponent : false,
			isShowSession : this.props.isShowSession,
			timeslot      : ''
		};
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value, timeslot: e.target.timeslot });
	};

	handleSubmit = (e) => {
		console.log('You have chosen ' + this.state.value + ' as your instructor for ' + this.state.timeslot);
		e.preventDefault();
		this.setState({
			showComponent : true,
			isShowSession : true
		});
	};

	render() {
		return (
			<LayoutOut title="Your private class">
				<Head>
					<title>Your private class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</Head>

				<div className="container card-space">
					{/* <h1>Book your session with one of our master teachers</h1> */}
					<p>A 1-on-1 session to help you better understand yoga and more importantly, your body!</p>

					<div className="row">
						<div className="first-row">
							<form onSubmit={this.handleSubmit}>
								<label>
									<h5>Which timeslot would you like?</h5>
									<select value={this.state.value} onChange={this.handleChange}>
										<option value="Mondays 8pm - 9pm with Suffian">
											Mondays 8pm - 9pm with Suffian
										</option>
										<option value="Tuesdays 7pm - 8pm with Angie">
											Tuesdays 7pm - 8pm with Angie
										</option>
										<option defaultValue="Saturdays 10am - 11am with Bianca">
											Saturdays 10am - 11am with Bianca
										</option>
									</select>
								</label>
								<br />
								<input className="btn btn-primary" type="submit" value="Submit" />{' '}
							</form>
						</div>
						<div className="first-row">
							{this.state.showComponent ? (
								<InstructorSchedule value={this.state.value} timeslot={this.state.timeslot} />
							) : (
								''
							)}
						</div>
					</div>
				</div>

				<style jsx>
					{`
						.card-space {
							// margin-top: 50px;
							// padding-top: 5%;
							// padding-bottom: 5%;
							// text-align: center;
							// display: inline-block;
						}

						.first-row {
							// border: blue 1px solid;
							// box-shadow: 9px 3px 6px rgb(173, 173, 173);
							width: 500px;
							margin: 0 auto;
						}

						.btn-primary {
							margin-left: 1px;
							margin: 0 auto;
							background-color: skyblue;
							border: black;
						}
					`}
				</style>
			</LayoutOut>
		);
	}
}

// import Header from '../components/Header';
import LayoutOut from '../components/MyLayoutOut';
import Head from 'next/head';
import { Component } from 'react';
import CommentsForm from '../components/CommentsForm';

export default class Adminprofile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleAddComments   : false,
			toggleCheckBookings : false,
			username            : 'admin',
			client              : 'takerbiker',
			first               : 'Tuesdays 7pm - 8pm with Angie',
			second              : 'Saturdays 10am - 11am with Bianca',
			showSecondRow       : false,
			session             : 'First Private session'
		};
	}

	// componentDidMount = () => {
	// 	this.addComments();
	// 	this.checkBookings();
	// };

	addComments = () => {
		console.log('inside Comments');
		this.setState((prevState) => ({
			toggleAddComments   : !prevState.toggleAddComments,
			toggleCheckBookings : false
		}));
		console.log('toggleComments', this.state.toggleAddComments);
	};

	checkBookings = () => {
		console.log('inside Check Bookings');
		this.setState((prevState) => ({
			toggleCheckBookings : !prevState.toggleCheckBookings
		}));
		console.log('toggleBookings', this.state.toggleCheckBookings);
	};

	render() {
		return (
			<LayoutOut title="Admin Profile">
				<Head>
					{/* <title>Admin Profile</title> */}
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>

				<div className="card-space">
					<img
						className="imageHead"
						src="https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01"
						alt=""
					/>
					<div className="container leftAlign">
						<h1>Admin Dashboard</h1>
						<h3>What would you like to do?</h3>
						<button onClick={this.checkBookings} className="btn btn-info">
							Check Bookings
						</button>
						<button onClick={this.addComments} className="btn btn-info">
							Add Comments to users
						</button>
						<button className="invisible1" onClick={() => this.setState({ showSecondRow: true })} />

						<hr />
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-sm special">
							{this.state.toggleAddComments ? (
								<CommentsForm client={this.state.client} session={this.state.session} />
							) : null}
							{this.state.toggleCheckBookings ? (
								<div>
									<h3>Upcoming bookings</h3>
									<table className="table">
										<thead>
											<tr>
												<th scope="col">Name</th>
												<th scope="col">Timeslot and Instructor</th>
												<th scope="col">Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td scope="row">{this.state.client}</td>
												<td scope="row">{this.state.first}</td>
												<td scope="row">First private session</td>
											</tr>
											{this.state.showSecondRow ? (
												<tr>
													<td scope="row">{this.state.client}</td>
													<td scope="row">{this.state.second}</td>
													<td scope="row">Last private session</td>
												</tr>
											) : null}
										</tbody>
									</table>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>

				<style jsx>
					{`
						.invisible1 {
							color: white;
							opacity: 0;
						}
						.imageHead {
							// background-size: contain;
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 80%;
						}
						.card-space {
							padding-top: 3%;
						}
						.leftAlign {
							text-align: left;
							padding-top: 1%;
							margin-bottom: 1%;
						}
						.box {
							border: 1px solid black;
							padding: 2px;
							margin: 5px;
							text-align: center;
						}
						.special {
							// border: 1px solid blue;
							padding: 30px;
							margin: 5px;
							// box-shadow: 9px 7px 25px -10px rgba(0, 0, 0, 0.75);
						}
						.btn {
							margin: 2px;
						}
					`}
				</style>
			</LayoutOut>
		);
	}
}

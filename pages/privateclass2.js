import LayoutOut from '../components/MyLayoutOut';
import BookPrivateSession from './bookprivatesession';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

export default class PrivateClass2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username                : '',
			// booked   : false,
			comments                : '',
			// value    : 'Bianca',
			bookedPrivateFirstClass : this.props.bookedPrivateFirstClass,
			isShowSession           : false,
			stillCanBook            : true
		};
	}

	toggleSession = () => {
		this.setState({
			isShowSession : true
		});
	};

	// handleComments = (e) => {
	// 	console.log('Inside comments sections');
	// 	e.preventDefault();
	// 	// let value = e.target.value;
	// 	this.setState({ comments: e.target.value });
	// };

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	let value = e.target.value;
	// 	this.setState({ comments: value });

	// 	fetch('....', {
	// 		method : 'POST',
	// 		body   : JSON.stringify(comments)
	// 	});
	// };

	// Handle change for comments section
	handleChange = (e) => {
		this.setState({ comments: e.target.value });
		// this.props.bookedFirstClass(this.state.bookedFirstClass)
	};

	// Handle submit for comments section
	handleSubmit = (e) => {
		console.log('Inside comments section');
		console.log(this.state.comments);

		e.preventDefault();
		// alert('A comment was submitted: ' + this.state.comments);
	};

	// To handle booking of session button
	handleBookSession = (e) => {
		// alert('Booked first session');
		Router.push('/BookPrivateSession2');
	};

	render() {
		// console.log(this.props.bookedFirstClass);
		// {
		// 	this.state.bookedPrivateFirstClass;
		// }
		const recordedComments = this.state.comments;

		return (
			<LayoutOut title="Your private class">
				<Head>
					<title>Your private class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>

				<div className="card-space">
					<img
						className="imageHead"
						src="https://i1.wp.com/www.yogaplus.sg/wp-content/uploads/2019/07/2nd-batch-190519-Acro-Partner-Yoga-Rated-36-1.jpg?resize=1024%2C429&ssl=1"
						alt=""
					/>
					<div className="jumbo1">
						<div className="card container">
							{/* <div className="container containerContent"> */}
							{/* <h1>What would you like to do?</h1> */}
							{this.state.isShowSession ? (
								<h3>Book your session with one of our master teachers!</h3>
							) : (
								<h3>What would you like to do?</h3>
							)}
							<div className="row">
								{/* <div className="col-sm first-row">
									<button className="btn btn-primary" type="button">
										Show comments by instructor
									</button>
								</div> */}
								<div className="col-sm first-row">
									{this.state.isShowSession ? (
										<BookPrivateSession isShowSession={this.state.isShowSession} />
									) : (
										<button onClick={this.toggleSession} className="btn btn-primary" type="button">
											Book your private session
										</button>
									)}
								</div>

								{/* LINK ONLY  */}
								{/* <div className="first-row">
								<button onClick={this.handleBookSession} type="button" className="btn btn-primary">
									Book your first Session
								</button>
								<br />
							</div> */}
							</div>

							{/* <div className="row">
							<div className="first-row">
								<form onSubmit={this.handleSubmit}>
									<label>
										Comments:<br />
										<textarea value={this.state.comments} onChange={this.handleChange} />
									</label>
									<br />
									<input className="btn btn-success" type="submit" value="Submit" />{' '}
								</form>
							</div>
						</div> */}
							{recordedComments}
							{/* {this.state.comments} */}
							{/* <div>Show comments by instructor</div> */}
							{/* <button className="btn btn-primary" type="button">
							Show comments by instructor
						</button> */}
						</div>
						<Link href="/Kickstarterpathpublic3">
							<a>Back</a>
						</Link>
					</div>
				</div>

				<style jsx>
					{`
						.imageHead {
							// background-size: contain;
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 60%;
							// margin-bottom: 10px;
						}
						.card-space {
							// margin-top: 50px;
							padding-top: 4%;
							text-align: center;
							// display: inline-block;
							padding-bottom: 10px;
						}

						.card {
							// margin-top: 1%;
							// margin-bottom: 1%;
							// margin: 0 auto;
							width: 40%;
							// display: block;
							padding: 1%;
							box-shadow: 7px 7px 7px -10px rgba(0, 0, 0, 0.75);
						}

						textarea {
							width: 300px;
							height: 80px;
						}

						.first-row {
							display: inline;
							margin: 1%;
						}

						.btn-primary {
							margin-left: 1px;
							margin: 0 auto;
							background-color: skyblue;
							border: black;
						}
						.jumbo1 {
							// background: linear-gradient(rgba(228, 255, 253, 0.1), rgba(0, 0, 0, 0.1));
							// 	url('https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
							background-size: cover;
							background-position: 10% 30%;
							/* opacity: 80%; */
							// min-height: 300px;
							padding-top: 10%;
							padding-bottom: 10%;
						}

						a {
							color: black;
						}
					`}
				</style>
			</LayoutOut>
		);
	}
}

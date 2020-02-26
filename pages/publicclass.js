import LayoutOut from '../components/MyLayoutOut';
import Link from 'next/link';
import { Component } from 'react';
import Head from 'next/head';

export default class publicclass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments       : '',
			lessonReviewed : false,
			classBooked    : false,
			commentShow    : false
		};
	}

	handleChange = (e) => {
		this.setState({ comments: e.target.value });
	};

	// Handle Submit Comments
	handleSubmitComments = (e) => {
		e.preventDefault();
		console.log(this.state.comments);
		this.setState({
			commentShow : true
		});
	};

	render() {
		return (
			<LayoutOut title="Your public class">
				<Head>
					<title>Your public class</title>
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
					<div className="card container">
						<h3>What would you like to do?</h3>
						<div className="row first-row">
							<Link href="/mindbodyonline">
								<h6>Class Schedule</h6>
							</Link>
						</div>

						<div className="row first-row">
							<Link href="/afterclassreview">
								<a>
									<h6>Recap and review! Which exercises do you remember?</h6>
								</a>
							</Link>
						</div>

						{/* <div className="row">
							<div className="first-row">
								<Link href="/">
									<h3>Comments</h3>
								</Link>
							</div>
						</div> */}

						<div className="row first-row">
							<form onSubmit={this.handleSubmitComments}>
								<label>
									<h6>Comments</h6>
									<textarea value={this.state.comments} onChange={this.handleChange} />
									<br />
									{this.state.commentShow ? (
										<div className="box">
											<p>My reflection: {this.state.comments}</p>
										</div>
									) : (
										''
									)}
								</label>
								<br />
								<input className="btn btn-primary" type="submit" value="Submit" />{' '}
							</form>
						</div>
					</div>

					<Link href="/kickstarterpathpublic">
						<a>Back</a>
					</Link>
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
							padding-top: 3%;
							text-align: center;
							padding-bottom: 10px;
						}

						.card {
							margin-top: 1%;
							margin-bottom: 1%;
							// margin: 0 auto;
							width: 40%;
							// display: block;
							padding: 2%;
							box-shadow: 7px 7px 7px -10px rgba(0, 0, 0, 0.75);
						}

						textarea {
							width: 250px;
							height: 80px;
						}

						.btn-primary {
							margin-left: 1px;
							margin: 0 auto;
							background-color: skyblue;
							border: black;
						}

						.first-row {
							border: grey 1px solid;
							width: 100%;
							margin: 0 auto;
							margin-bottom: 4px;
							padding: 1%;
							display: block;
							box-shadow: 5px 3px 5px rgb(240, 240, 240);
						}

						a {
							color: black;
						}

						.blue a {
							color: blue;
						}
					`}
				</style>
			</LayoutOut>
		);
	}
}

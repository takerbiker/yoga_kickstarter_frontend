import LayoutOut from '../components/MyLayoutOut';
import Link from 'next/link';
// import PrivateClass from './PrivateClass';
// import PublicClass from './PublicClass';
import { Component } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

export default class kickstarterpath extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username                : 'takerbiker',
			bookedPrivateFirstClass : false,
			bookedFirstPublicClass  : false
		};
	}

	// componentDidMount = () => {
	// 	// console.log('Hello', bookedPrivateFirstClass);
	// 	this.setState({
	// 		bookedPrivateFirstClass : true
	// 	});
	// };

	// To redirect to private class

	toPrivateClass = () => {
		console.log('Button has been clicked');
		console.log("Button's state is", this.state.bookedPrivateFirstClass);
		this.setState({
			bookedPrivateFirstClass : true
		});
		Router.push('/privateclass');
		// <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
	};

	// To redirect to public class
	toPublicClass = () => {
		console.log('Button has been clicked');
		console.log("Button's to public class state is", this.state.bookedFirstPublicClass);
		this.setState({
			bookedFirstPublicClass : true
		});
		Router.push('/publicclass');
		// <PrivateClass bookedFirstClass={this.bookedFirstClass} />;
	};

	render() {
		const bookedPrivateFirstClass = this.state.bookedPrivateFirstClass;

		return (
			<LayoutOut title="Kickstarter Profile">
				<Head>
					<title>Your Journey Begins here</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>
				{/* <div className="jumbo1"> */}
				<div className="card-space">
					<img
						className="imageHead"
						src="https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/41679727_735312276806906_3214309389242466304_o.jpg?_nc_cat=101&_nc_oc=AQnd91_8ITD43jaU_HMAdEq0DW0ruvnIQ1NsxWtnzcGhq33y8rCT0uKR_zEMDQHinK8&_nc_ht=scontent.fsin3-1.fna&oh=ee2b126cca63973c2256f3a43890c75a&oe=5EB4DA01"
						alt=""
					/>
					<div className="container leftAlign">
						<h1>Your Kickstarter Pathway</h1>
						<h3>
							Hi {this.state.username}, welcome to the amazing world of yoga! Now, you can keep track of
							your progress.
						</h3>
						<hr />
					</div>
					<div className="container containerBig">
						<div className="row ">
							{/* First row first box  */}
							<div className="col-sm special">
								<div onClick={this.toPrivateClass}>
									<h6>> Your First Step</h6>
									<h2>Private Session</h2>
									<p>
										Want to get started but no idea where to start? Book your 1-on-1 with our master
										trainers!
									</p>
									<button className="btn btn-info" onClick={this.toPrivateClass}>
										Start
									</button>
								</div>
							</div>

							{/* First row second box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h6>> Basics</h6>
									<h2>Public Class</h2>
									<p>
										Get familiar with basic poses and exercises that will make your yoga practice
										more fulfilling!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>

							{/* First row third box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h6>> Basics</h6>
									<h2>Public Class</h2>
									<p>
										Get familiar with basic poses and exercises that will make your yoga practice
										more fulfilling!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>
						</div>

						<div className="row">
							{/* Second row first box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h6>> Basics</h6>
									<h2>Public Class</h2>
									<p>
										Learn some basic poses and exercises that will make your yoga practice more
										fulfilling in the long run!
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>

							{/* Second row second box  */}
							<div className="col-sm special">
								<div onClick={this.toPublicClass}>
									<h6>> Explore</h6>
									<h2>Public Class</h2>
									<p>
										You should be a little more familiar with the basics by now. Up for a little
										challenge?
									</p>
									<button className="btn btn-info" onClick={this.toPublicClass}>
										Start
									</button>
								</div>
							</div>

							{/* Second row third box  */}
							<div className="col-sm special">
								<div onClick={this.toPrivateClass}>
									<h6>> Be Free</h6>
									<h2>Private Session</h2>
									<p>
										Come and recap what you have learnt with a 1-on-1 session with our master
										trainers!
									</p>
									<button className="btn btn-info" onClick={this.toPrivateClass}>
										Start
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>
					{`
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
						.special {
							padding: 15px;
							margin: 10px;
							box-shadow: 9px 7px 25px -10px rgba(0, 0, 0, 0.75);
							background-color: white;
						}

						p {
							font-size: 12px;
						}

						h3 {
							font-size: 20px;
						}

						hr {
							width: 1100px;
						}

						.title {
							font-family: "Nanum Myeongjo", 500;
							font-size: 30px;
						}
						.jumbo1 {
							background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
								url('https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
							padding-bottom: 20%;
						}
					`}
				</style>
			</LayoutOut>
		);
	}
}

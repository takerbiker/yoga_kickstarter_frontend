import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'; // For fetch API
import Error from './_error';
import { Component } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';

export default class afterclassreview2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments         : '',
			checkedExercises : {
				First  : true,
				Second : true,
				Third  : false
			},
			poses            : []
		};
	}

	// To pull in data
	static async getInitialProps() {
		const res = await fetch('https://yoga-exercises-api.herokuapp.com/poses');
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		console.log(`Yoga exercises data fetched. Count: ${data.length}`);

		return {
			// poses : data.map((entry) => entry.pose)
			poses      : data,
			statusCode
		};
		// TEST
		// this.setState({ poses: poses})
	}

	// Handle Change / Submit for comments
	// HandleChange
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	// HandleSubmit
	handleSubmit = (event) => {
		event.preventDefault();
		Router.push('/publicclass2');
	};

	/////////////////////////////////////////////////////////////////////
	// For checkboxes / ticking of exercises
	//Checkbox change
	onCheckboxChange = (e) => {
		const val = e.target.checked;
		const name = e.target.name;
		let updatedPoses = Object.assign({}, this.state.poses, { [name]: val });
		this.setState({
			poses : updatedPoses
		});
	};

	onCheckboxSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.poses);
	};

	// To render checkboxes, can delete
	renderCheckedBoxes = () => {
		// const poses = ['Yoga First', 'Yoga Second', 'Yoga Third'];
		return poses.map((pose, i) => {
			return (
				<label key={i}>
					{pose}
					<input
						type="checkbox"
						name={pose}
						onChange={this.onCheckboxChange}
						value={this.state.checkedExercises[pose]}
					/>
				</label>
			);
		});
	};

	render() {
		const { poses, statusCode } = this.props;
		// For errors in pulling data
		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

		return (
			<Layout title="After Class Review">
				<Head>
					<title>Review your class</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>

				{/* {console.log(typeof this.props)}  */}
				{/* {console.log(poses)} */}
				{console.log('poses are now linked', poses)}
				<div className="jumbo1">
					<div className="container">
						<div className="card-space">
							<div className="container textCenter">
								<h1>Review your class</h1>
								<h5>Which asanas did you learn during the class?</h5>
								<input
									className="btn btn-success"
									type="submit"
									value="Submit"
									onClick={this.handleSubmit}
								/>

								<div className="row ">
									{poses.map((pose) => (
										<li key={pose.id}>
											<div className="card">
												{/* <div className="col listingCard col-sm-3"> */}
												<img src={pose.image} className="card-img-top" />
												<p className="book-title card-title">{pose.name}</p>
												<input
													type="checkbox"
													name={pose.name}
													onChange={this.onCheckboxChange}
													value={this.state.poses['{pose.name}']}
												/>
												{/* </div> */}
											</div>
										</li>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					link {
						color: white;
					}
					.card-space {
						padding-top: 4%;
					}

					.textCenter {
						text-align: center;
					}

					.row {
						text-align: center;
						// display: inline-block;
						margin: 0 auto;
					}

					.imageHead {
						// background-size: contain;
						width: 100%;
						height: 300px;
						object-fit: cover;
						object-position: 0 80%;
					}

					.card {
						text-align: center;
						width: 14rem;
						// height: 16rem;
						display: block;
						// margin: 0 auto;
						margin: 10px;
						box-shadow: 6px 3px 6px rgb(110, 110, 110);
						padding-bottom: 20px;
					}

					.book-title,
					.listed-by {
						color: black;
						// display: inline-block;
						margin: 0 auto;
						// width: 200px;
					}
					img {
						// object-fit: cover;
						// width: 100px;
					}

					li {
						list-style-type: none;
					}

					.jumbo1 {
						background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
							url('https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/15055786_369661510038653_1854036922822573829_n.jpg?_nc_cat=111&_nc_oc=AQk5LNP_v65VIE--9UTxOylX26rpHyGTx3dNTIu76BUMMvKad3eAdAUC1CHKRmWUsrk&_nc_ht=scontent.fsin3-1.fna&oh=4040be850d377a868251d2dfcc379de3&oe=5EBFD952');
						background-size: cover;
						background-position: 10% 50%;
						/* opacity: 80%; */
						min-height: 300px;
					}

					.jumbo1words {
						color: white;
						font-family: "Permanent Marker";
					}
				`}</style>
			</Layout>
		);
	}
}

{
	/* Working display for poses  */
}
{
	/* <div className="container-poses row">
							{poses.map((pose) => (
								<li key={pose.id}>			
										<img src={pose.image} className="img-fluid img-thumb"/>
										<p className="book-title">
										<input type="checkbox" aria-label="Checkbox button for following text input" />
										<br />
										<Link href="/p/[id]" as={`/p/${pose.id}`}>
											<a>{pose.name}</a>
										</Link>
										</p>
										<p className="listed-by">{pose.category}</p>

								</li>
							))}
						</div>  */
}
{
	/* <form onSubmit={this.onCheckboxSubmit}>
								{this.renderCheckedBoxes()}
								<input className="btn btn-success" type="submit" value="Submit" />

						</form> */
}

{
	/* Working form  */
}

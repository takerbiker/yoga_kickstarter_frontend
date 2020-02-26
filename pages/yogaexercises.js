// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch'; // For fetch API
import Error from './_error';
import { Component } from 'react';
import Head from 'next/head';

export default class Yogaexercises extends Component {
	// state = {
	// 	poses: null
	// }
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
	}

	render() {
		const { poses, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}
		return (
			<Layout title="Yoga Exercises">
				{console.log(poses)}
				{/* {console.log(typeof this.props)}  */}
				<Head>
					<title>Basic Asanas</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>
				<div className="jumbo1">
					<div className="container">
						<div className="card-space ">
							{/* <img
						className="imageHead"
						src="https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
					/> */}

							<div className="container textCenter">
								<h3>Basic Yoga Asanas (Exercises)</h3>
								<p>
									Just getting started but have no idea where to start? Here are the 12 basic asanas
									that you should get familiar with!
								</p>
								<div className="row">
									{/* <div className="column"> */}
									{poses.map((pose) => (
										<li key={pose.id}>
											<div className="card">
												<img src={pose.image} className="card-img-top" />
												{/* <div className="card-body"> */}
												<p className="book-title card-title">
													<Link href="/p/[id]" as={`/p/${pose.id}`}>
														<a>{pose.name}</a>
													</Link>
												</p>
												<p className="listed-by card-text">{pose.category}</p>
												{/* </div> */}
											</div>
										</li>
									))}
									{/* </div> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					.card-space {
						padding-top: 4%;
						// margin: 0 auto;
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

					.container-books {
						// position: absolute;
						// top: 150px;
						// left: 80px;
					}

					// .listingCard {
					// 	text-align: center;
					// }

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

					.jumbo1 {
						background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
							url('https://scontent.fsin3-1.fna.fbcdn.net/v/t1.0-9/15055786_369661510038653_1854036922822573829_n.jpg?_nc_cat=111&_nc_oc=AQk5LNP_v65VIE--9UTxOylX26rpHyGTx3dNTIu76BUMMvKad3eAdAUC1CHKRmWUsrk&_nc_ht=scontent.fsin3-1.fna&oh=4040be850d377a868251d2dfcc379de3&oe=5EBFD952');
						background-size: cover;
						background-position: 10% 50%;
						/* opacity: 80%; */
						min-height: 300px;
						// padding-top: 20%;
						// padding-bottom: 20%;
					}
					li {
						list-style-type: none;
					}

					a {
						color: light-blue;
					}
				`}</style>

				{/* <ul>
					{poses.map((pose) => (
						<li key={pose.id}>
							<div className="card">
								<img src={pose.image} className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">
										<Link href="/p/[id]" as={`/p/${pose.id}`}>
											<a>{pose.name}</a>
										</Link>
									</p>
									<p>{pose.category}</p>
								</div>
							</div>
						</li>
					))}
				</ul> */}
				{/* <div className="card">
					<img
						src="https://www.yogajournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ2MjI3ODcyMDE5OTgxOTIx/cow-face-with-eagle-arms-forhips.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</p>
					</div>
				</div> */}
			</Layout>
		);
	}
}

import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import Head from 'next/head';
import { Component } from 'react';
import classSchedule from '../base/mindbodyonline.js';
// import useSWR from 'swr';

export default class Mindbodyonline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule : ''
		};
	}

	// To fetch
	static async getInitialProps() {
		const res = await fetch('https://yoga-exercises-api.herokuapp.com/classes');
		const statusCode = res.status > 200 ? res.status : false;
		const data = await res.json();
		console.log(`Class schedule fetch.`);

		return {
			schedule   : data,
			statusCode
		};
	}

	render() {
		const { schedule, statusCode } = this.props;

		if (statusCode) {
			return <Error statusCode={statusCode} />;
		}

		return (
			<Layout title="Class Schedule">
				<Head>
					<title>Class Schedule</title>
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
					<div className="container">
						{/* {classSchedule[0].classScheduleId}
						{classSchedule[0].Location.Name}
						{classSchedule[0].ClassDescription.Name} */}
						<div className="textCenter">
							<h3>Classes suitable for you!</h3>
							<Link href="/PublicClass">
								<a>Back</a>
							</Link>
						</div>
						{classSchedule.map((x) => (
							<li key={x.classScheduleId}>
								<div className="container">
									<div className="eachListing row">
										<div className="col-sm">
											<h5>{x.Date} Sunday</h5>
											<p>
												{x.StartDateTime} - {x.EndDateTime}
											</p>
											<p>{x.Location.Name}</p>
										</div>
										<div className="col-sm">
											<h5>{x.ClassDescription.Name}</h5>
											<p>{x.ClassDescription.Description}</p>
											{/* <p>Availability: {x.IsAvailable}</p> */}
										</div>
										<div className="col-xs verticalAlign vertical">
											<a href={'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475'}>
												Book class
											</a>
										</div>
									</div>
								</div>
							</li>
						))}

						{/* MBO  */}
						{/* {schedule.Classes.map((x) => (
						<li key={x.ClassScheduleId}>
						<div className="container">
							<div className="eachListing row">
								<div className="col-sm">
									<p>Start-date: {x.StartDateTime}</p>
									<p>End date: {x.EndDateTime}</p>
									<p>Studio: {x.Location.Name}</p>
								</div>
								<div className="col=sm">
									<p>Class Description: {x.ClassDescription.Description}</p>
								</div>
									<p>Availability: {x.IsAvailable}</p>
									<div className="col-xs verticalAlign vertical">
										<a href={'https://clients.mindbodyonline.com/LoginLaunch?studioid=590475'}>
											Book class
										</a>
									</div>
								</div>
							</div>
						</li>
					))} */}
					</div>
				</div>

				<style jsx>
					{`
						.imageHead {
							width: 100%;
							height: 300px;
							object-fit: cover;
							object-position: 0 80%;
						}
						.card-space {
							padding-top: 3%;
						}

						.container {
							padding: 15px;
						}

						.textCenter {
							text-align: center;
							// padding: 10px;
							margin: 10px;
						}
						.eachListing {
							// border: 1px solid blue;
							margin-bottom: 10px;
							padding: 15px;
							// width: 1000px;
							// margin: 0 auto;
							box-shadow: 9px 9px 9px rgb(240, 240, 240);
						}

						li {
							list-style: none;
						}

						.vertical {
							padding: 4% 0;
						}

						a {
							color: dark-blue;
						}
					`}
				</style>
			</Layout>
		);
	}
}

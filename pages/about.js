// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	return (
		<Layout title="About us">
			<Head>
				<title>About</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				/>
			</Head>
			<div className="jumbo1">
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<h1 className="title">Yoga Kickstarter Package</h1>
							<p>
								We've all been there - we want to indulge in our yoga practice but there just isn't a
								systematic pathway for us to consolidate our learnings! We didn't even know which
								classes were suitable for us so we end up picking more advanced classes. We begin to
								doubt ourselves when we fail to execute more advanced poses and slowly, we lose
								interest. <br />
								<br />At Yoga+, we created this Kickstarter Package to track your progress when you are
								initially starting out in the amazing world of Yoga. Your package consists of 2 private
								sessions and 4 public classes, which will slowly ease you into the wonderful wonderful
								world of yoga!
							</p>

							<Link href="https://www.yogaplus.sg/">
								<a>Website</a>
							</Link>

							{/* <h1>Yoga+</h1>
							<p>
								At Yoga+, most of the yoga happens outside of the yoga mat. Through our regular yoga
								classes, monthly workshops and other activities, no matter whether you are the absolute
								beginner or the advanced practitioner, we invite you to explore the infinite
								possibilities beyond the yoga asanas.
							</p> */}
						</div>
						<div className="col-sm" />
					</div>
				</div>
			</div>
			<div className="container card-space" />

			<style jsx>
				{`
					.card-space {
						// margin-top: 50px;
						// padding-top: 5%;
						// padding-bottom: 5%;
						// text-align: center;
						// display: inline-block;
					}

					li {
						list-style: none;
					}
					.jumbo1 {
						background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
							url('https://scontent.fsin3-1.fna.fbcdn.net/v/t31.0-8/22904806_541047162900086_657467607020809544_o.jpg?_nc_cat=104&_nc_oc=AQm4HCIbL9oN20balW-e4roJDj3WY2PKVrWTEVE4aQcCsNnNq3hrJGybmznqyHzPX-k&_nc_ht=scontent.fsin3-1.fna&oh=7a5458c13948255094446387fceb7c5b&oe=5EC1989F');
						background-size: cover;
						// background-position: 10% 30%;
						/* opacity: 80%; */
						// min-height: 300px;
						padding-top: 17%;
						padding-bottom: 22%;
						margin-top: 3%;
					}
					.title {
						font-family: "Roboto Mono";
						font-size: 30px;
					}

					.col-sm {
						text-align: justify;
					}
					* {
						color: white;
					}

					a {
						border: 1px white solid;
						padding: 6px;
					}
				`}
			</style>
		</Layout>
	);
}

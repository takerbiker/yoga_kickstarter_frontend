import Header from './Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

import Head from 'next/head';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Head>
					<title>Your Yoga Journey</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800|Noto+Serif+SC:400,600,900|Paytone+One|Poiret+One|Roboto+Mono:400,500,700&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<nav className="navbar navbar-expand-md navbar-dark fixed-top">
					<div className="title">
						<Link href="/">
							<a>Yoga Kickstarter</a>
						</Link>
					</div>
					<button
						className="navbar-toggler "
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExampleDefault"
						aria-controls="navbarsExampleDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarsExampleDefault">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about">
									<a>About</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/yogaexercises">
									<a>Basic Asanas</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/login">
									<a>Log In</a>
								</Link>
							</li>

							{/* To toggle log in or log out button  */}
							{/* {this.props.currentUser ? (
                        <li className="nav-item nav-link" onClick={this.props.toLogout}>
                            <Link to="/">Logout</Link>
                        </li>
                        ) : (
                        <li className="nav-item">
                            <Link href="/login" className="nav-link">
                                <a>Log In</a>
                            </Link>
                        </li>
                        )} */}

							{/* for signup */}
							{/* {this.props.currentUser ? (''
                        ) : (
                            <li className="nav-item">
                                <Link href="/signup" className="nav-link">
                                    <a>Sign Up</a>
                                </Link>
                            </li>
                        )} */}
						</ul>
					</div>
				</nav>

				<style jsx>
					{`
						.nav-item {
							// font-color: black;
							text-color: black;
							text-align: right;
							font-family: "Nanum Myeongjo", 700;
							font-size: 18px;
							text-transform: lowercase;
							// padding: 3px;
						}

						a {
							text-decoration: none;
							color: black;
						}

						.title {
							font-family: "Roboto Mono";
							font-size: 20px;
						}

						li {
							padding: 4px;
							padding-right: 6px;
							// text-decoration: bullet;
							// list-style-type: circle;
						}
					`}
				</style>
				{/* <style jsx>{`
					.navbar-dark .navbar-nav .nav-link {
                        color: black;
                        // text-align: right;
                        // font-family: "Open Sans", sans-serif;
                        // font-size: 1rem;
                        // text-transform: lowercase;
                        // border-bottom: 2px solid orange;
                      }
                      
                      .navbar-dark .navbar-brand {
                        color: orange;
                        font-family: "Permanent Marker", cursive;
                        font-size: 2rem;
                      }
				`}</style> */}
			</div>
		);
	}
}

export default Navbar;

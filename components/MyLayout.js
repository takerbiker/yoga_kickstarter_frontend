import Header from './Header';
import Navbar from './Navbar';
import Head from 'next/head';

// const layoutStyle = {
// 	margin  : 20,
// 	padding : 20,
// 	border  : '1px solid #DDD'
// };

const Layout = (props, title) => (
	// <div style={layoutStyle}>
	<div>
		<Head>
			<title>Yoga Kickstarter</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
			<link
				href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<Navbar />

		{/* {props.title} */}
		{props.children}
		{/* <footer>footer (layout component)</footer> */}
	</div>
);

export default Layout;

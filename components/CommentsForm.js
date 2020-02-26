import Layout from '../components/MyLayout';
import Link from 'next/link';
import { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'; // For fetch API

export default class CommentsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments           : [],
			comment            : '',
			commentOnUser      : 'Comment successfully added',
			username           : '',
			usernameWritingFor : '',
			commentShow        : false
		};
	}

	componentDidMount = () => {
		this.getComments();
	};

	toggleComments = (e) => {
		this.setState({
			commentShow : true,
			comment     : this.state.comment
		});
	};

	getComments = () => {
		fetch('https://yoga-exercises-api.herokuapp.com/comments')
			.then((response) => response.json())
			.then((json) => console.log(json))
			.catch((error) => console.error(erro));
	};

	handleSubmitComments = (e) => {
		e.preventDefault();
		console.log(this.state.comments);
		console.log(this.state.usernameWritingFor);
		// fetch('http://localhost:3000/comments', {
		// 	body    : JSON.stringify({ comment: this.state.comment }),
		// 	method  : 'POST',
		// 	headers : {
		// 		Accept         : 'application/json, text/plain, */*',
		// 		'Content-Type' : 'application/json'
		// 	}
		// })
		// 	.then((createdComment) => {
		// 		return createdComment.json();
		// 	})
		// 	.then((jsonedComment) => {
		// 		this.setState({
		// 			comments : [jsonedComment, ...this.state.comments]
		// 		});
		// 		console.log(comments);
		// 	})
		// 	.catch((error) => console.log(error));
	};

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleUsernameOption = (e) => {
		this.setState({ usernameWritingFor: e.target.value });
	};

	handleSessionOption = (e) => {
		this.setState({ session: e.target.value });
	};

	render() {
		// console.log(comments[0].comment);
		console.log('Client is ', this.props.client);
		return (
			<div className="container">
				<Head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>
				<div className="row">
					<div className="commentSection card">
						<form onSubmit={this.handleSubmitComments}>
							<h5>Comments</h5>
							<label>
								For:{' '}
								<select value={this.props.client} onChange={this.handleUsernameOption}>
									<option value="{this.props.client}">{this.props.client}</option>
									<option value="johnjohn">johnjohn</option>
								</select>
								<select value={this.props.session} onChange={this.handleSessionOption}>
									<option value="{this.props.session}">{this.props.session}</option>
								</select>
								<br />
								<textarea value={this.state.comment} onChange={this.handleChange} />
								{/* FOR USERNAME BLABLA */}
							</label>
							<br />
							<input
								className="btn btn-primary"
								type="submit"
								value="Submit"
								onClick={this.toggleComments}
							/>
						</form>
						{this.state.commentShow ? (
							<div className="col-sm">
								<div className="newComment">{/* <h3>Work on your posture!</h3> */}</div>
								<p>
									<i>{this.state.commentOnUser}</i>
								</p>

								<p>
									To {this.props.client}: {this.state.comment}
								</p>
								{/* <h1>newComment</h1> */}
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<style jsx>
					{`
						.commentSection {
							border: 1px solid black;
							width: 100%;
							text-align: center;
						}

						textarea {
							width: 300px;
							margin-top: 15px;
							height: 150px;
						}

						.btn-primary {
							margin-left: 1px;
							margin: 0 auto;
							background-color: skyblue;
							border: black;
						}
					`}
				</style>
			</div>
		);
	}
}

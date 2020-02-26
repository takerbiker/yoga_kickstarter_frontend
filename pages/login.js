import fetch from 'isomorphic-unfetch'; // For fetch API
import Head from 'next/head';
import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Layout from '../components/MyLayout';

export default class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username    : '',
			password    : '',
			users       : [],
			currentUser : '',
			message     : '',
			redirect    : false
		};
	}

	static async getInitialProps() {
		const res = await fetch('https://yoga-exercises-api.herokuapp.com/users');
		const data = await res.json();
		console.log(`User data fetched. Count: ${data.length}`);

		return {
			// poses : data.map((entry) => entry.pose)
			users : data
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.users);
		if (this.state.username === 'takerbiker' && this.state.password === 'hello') {
			Router.push('/kickstarterpathc');
		} else if (this.state.username === 'takerbiker' && this.state.password === 'takerbiker') {
			Router.push('/kickstarterpath');
		} else if (this.state.username === 'admin') {
			Router.push('/adminprofile');
		}
	};

	render() {
		const { users } = this.props;
		return (
			<Layout title="Log in Page">
				<Head>
					<title>Log In</title>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					/>
				</Head>
				{/* {console.log(users)} */}
				<div className="jumbo1">
					<div className="card-space">
						<div className="bodyCenter card">
							{/* FORM  */}

							<form onSubmit={this.handleSubmit} className="form-signin">
								<img
									className="mb-4"
									src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAMAAAC4YpZBAAAAilBMVEX///8AAAD8/Pz5+fn6+vr09PTv7+/p6enb29vu7u7z8/Po6Ojj4+MUFBTf39/Nzc1RUVGvr69paWkfHx+Kioo6Ojq9vb3ExMQtLS3R0dEnJyd/f38YGBhiYmKnp6dCQkJ2dnaSkpKcnJxdXV0yMjJFRUVUVFQLCwuNjY23t7doaGheXl55eXmioqJ4LdrWAAAVEElEQVR4nN0dabupXFQlktKgUWhQkqv///due60doRxUh9P68D7vxWGv1jzu0ej3geUk66AuU4ZhlvvQZT9whH6B5WcLO9ed1NkHRngIfIYJpp8+VJfAitOFooW6n6bmMbTnHHnN9fa5OOIWist/+nytgeUl19IOwT4umNTUI/tCvsmiQM/dOarwwfO1Bm4m2Fpk6EksFxgyq2Nkz8dXn2D5kaAnxuxDB2wL3NTNIk9XzRUgCKrGlribT0nhyebmwp9EkltYob73S/wIo540ZV4jfMo/3fqLWrbA8KA66zN+zNo/5u503PBpkftrSLL8IjOSM3rpOt6fcqUJwT8J/FzJ9dWZgLEahNni7xuIKvCCFe5KFNN47+XWnaL54zCWrHBforhOgsgShkXDAiZ2dHRKKu4NzZ0OjIgFSFvdL+1FcrAW4l/TmE/A4pAsKYqOZ0mD49MCWME7c+pOmw6QiIVWVU5yqW8Of9rXbgZe8Sirmro2qAjxApx7oLyaGLb46dP0A6wQUS9ODd3hWQ2EmfYPBXKfC0PFcaQEyKxJvhgsjnxkYkQcSYO0HACuCjjKJ+nTJ+kPZhHExkvd/fRJ+gPW1YGOO22IjhwFUQNuNcPFp0/SI0ghqNbAHqxiLUDQSVkjzuefPkifYAO3bgZNyJFGUv/yYdCE5ENiQPw/mRx+GuYeCZP1gYaQFBYn4ggYk0+fo1cQiCtg5oNWOyNhQ8JIa9hILgiS/5RB6x1E8igMG0npWCCpDzjIIiARxRMMNHlVwpyYkGDAURaBmVH4Aqdhm8kRH6VM6g00n3yG7bJg14ErnpG9Iibk06foGYSEYfYDzmEBTAobYtqfPkXPwBfqdZV9+hQ9A6s5DBN9+hR9g6IW6nXYUUjh2AWF5hm6DeHz9fA1z0gxGXk7dH6dFdHWaeiO3ShnGHXo7sBISJmV9ulD9A184fR4f7K7+hXIZCZRPn2IvkHaMXI07FxW4dpFa2Y/6JIPAdIbYX36EH0DF6bMZuj8OlKK0Hnwqkcsokpv+KQ0GWfwXg9/YBhj4DnmQsGajDl4qRyHBSk7y6TzlvaVnbOSz8Sdxc5zz1ntvlHGtx1OKC9IRfAb8w1c0l3EJeyYLy0J2gyz66iNEJFMvpBh2YCRw248AuEIPbTbTr6sWxBixu/GjJA8ZwHGN2rYPO2o6ix6gOTmG6u74pGRu2GxkDSYMv5X1gQLF9bsJJuewaTJ8juD1Ehm9C6+x8UxjOgbhXI00xmmi0KetAck30sCCl6ihn1GC7bJLDtQFzNUrw/t7sTNlDp3gddgrvpBFaqtnWPzNbNp+R0FcBHMKt56dix/4d9ptkuZNLjXTdMDHVfd1+ktVly4Vma3c0BnJ4Zp792xtg+aJ7/awSAqW0OjfMLbOqJyvKXYIijXHDD3Tv5YyDx/TZqPWmluV2XW7VU/9JgyzHUflOsV+ijEl6QwLlG5LnSzyj/mAvubDs7pdp/St45tfNBsxexbu9Yka0Tc1+pBxlpSEPeAnObql9UpfvVRsJbKVEG9QlPwVpe39Cf1Gnu/l4Uv4uf2PmyG61GqQslunYLPqMa1r1CpeJOs5TPXUN1opOzS8+vF/z3nukjG7k4C53oHuWYJLaVRfc0ir6lIXKvk1tVpq53MivDZZyTTIMvA1b+cxjbpe6ZhCQtXe0aw2KzgoMPtq67PxK3F8ogyVeVEiQjqEu2wTSkS51NWMw8VbemekQSBJOyrnrnepftzVOt5Qzonmky+bXFhC17T21pLDXGo6kd2S+RQB41r4zy8Q9Aj/vxFvqQdxTEO6Wuie34GAj4BNXvFl1L8Oiy5qBDLli6ZAIwlX00qQKM0CqCbUIoQ6V8QvDz6Sd4rZbFmJmcKhmddY14fAWC5vsVyUlBYa6d8aLgVVMtlLKijf4AX2Jh0gyrHJrN/KRU9rVSeNZkFPiTMsDJeDCNIHYRZ5zevSioTtwygM1AtyZXTg4QgyMwMMCHU3I+3gBaeQqDKxTtjwp23rbDwrcvwVY8HsLxLVbiFtWyX8UHeXF9HIhZBTZ3QfrfLMyCOVkFL+JeILk9qnDHhD0HoovME6aP09Q1ywLF3WGZtU5TjHHTL5oqzROBS8lsCGMplKRQCyGgMzJ2hwb8gSQ4j+xHRhaJB1LJ+eYu386cMCWB5l48MC+PSyvMRIN5yrk2uRV7zF2efqFQ3IxuMA0Szc+oTXsRZBA5OyYct8gSWFyYbb2N5HXs/4wkm9rYjlNMZedtG+RDXibmtCXIgqYSHgXMZs6QJh8EHMNQWeeCCCUud9uV8JAHJKxRRUISd/CeK1GI59W/J8CLgz5vXDxlUDMn+TNARPx93Cvwrk09j3tas/LhNnYB0wcLD2F0wEkqHfv2IJCw7ZjMHOHbM8QWIBRAuElr2vvBInGv7NAfMQxEE7eq4CiCyK36ZA3FOKylNkQZmTDJzyXvy5QHMz6HZsgFLUVBsK9PyEBzf9TE0DM87BbquE5/CbohcnwVM9ZjX+guYmCR4eSSddf0OaiUgpV8xlBndppNqI0DqeFG9RolkU85+biSr9cWxr8J2DHa5zSQXG9aQEn1TbwLPkKlqSsTaLESR2wJVK8HQtKRXMBNgT3B2Np355fxBrWlht7UIAt8QGkZ4nHcBY5HrNCfvwdQ/IaCOtDmjosAPHzjqy1/9oUZJGdsjIJ1e6l62fIewRX2MONkxDRBrRCQMJm3jxeIzvP5pDJeC4tlJcLyK0wHHh7jLQlJe/kooD3rgp6Amy2dTBDGXQ1fM/VwLz7uwFrXMmqbLXQbRTFD4fO8bEhZs5epKVjCVB7o8p8c+vwXnNcTSTZcv+M/OfruLT6BMDhWGsnLwiz1Y6HIq76lHNfX2qro7Bt4hgtzC2stsRXEFYYa4bVrVLV346atEBasBlY4FauPN9cHQOYckH3L68R5JuXjmRoVos1CuIHmpWU1QIZ2nCFiW0go46dYzT1CA3oQIfuoq4kJXaE1Iiab9kp+dAVOCGnDlK4aVzpZiJ6FzgGkRVqBvpCqmRkoVy1ogDHKF5UcVLG/M98hsUxrnwE+XswrL06TjP8KlEGRVlBv4rfhz4AGWaZyxe1YehIQ8YQEI7MWMZotS3cWcSml5qEJO7o2gTT6X3MQfThunYI4p2MpjUqhlB/4AFy6NygQtqNUUkc4qWM60y2Ld/ZQqTIMdccKhXA95EiiPUMZjM3ynZrYHnkZyYxxXTIsl4AIQ62IppPK8KvBwBGFw6VLykHungoWGlCTDWMG4GIqU4C3uSKbLtaN9SWAStSD1lhiYLvCtfY3xtOpouWzTT+Di+f4BG3HC9ljmTvGJA5al2LOZCYKEMuxitcEdz7VdRb345Nggl6vEPK8yheQ8iwGeR0SBQ121rpM1EFj/Bqc1c3y/73cRU9Vg5PkhOK8fRamkHFtiaQOZy3LPHIme6Dt4UDHFCFlYqSSaCzVahtUgozAgQX2hWhNYi6UM5vtNEM+p5DSt2mWKmAI5DTBUSElGLnUAF1YRMWj+Z0Uta3Z5a31OibA5eRTpSeIwZGPq64BZHZZpq8acW/cRUT3Rb+QhXFI1QbCOVVoRmHolQ66PCksl8Gy5LcoW6b7ClJRPHWQgs2GACRT5bZNEypxalEYx8XEGH2h7MckaYiKXK1irnuAs3ztreWkeNZHqIkalyoR34RHIzj66inUm3lkmnKBp7QfRvndRVnpJVrwDQnCWodQ8oYo1zszBlR4Nniy85hopy6OtMoF8RYWUE8WISfpHD61bjcFvN/FSXq/8QGvMein6xrizGkw7LAufOUji1SpOjqE9g3S6U2GyeXARV1VrEg0bn9Q/gtTMNky8FaJ2ubBkbfNcUx6oEk6a32+xL6L1dqvt2alrW5btSvxoDi6MXqWAFNKAwjeUpqfJn5CvC7M7y0jBcxVkUvOh2DeCCyY9dNarDrrvJhVKitGnk6G5zTqOFrY2kpjphYKMvZa19Rq4Lym8DRgY30n+mBdF/sGTpPWHZaQRp8KPHjyPt6HDvkBo80jvKoc/gUV3tZpr4ub0s+q7u5F9LCT4r3aMzsvMHePodl+DHi2zsRdgNfQzXzwoTx2ZtWr0eOfVleJvA7DziFm9FsaJbuRTW9rr3isv6KbFmUZ8x1eM79Q2ynp7O6P9I8w62s88RU/1efZnJS04J+dWX9j/XQdY9fGfJQkrRP+ISqb+ofHzX3wDiFituS10NwDrQs8Z428xzEz/yH5hzFaZTzktvB1AMjOOJgqVyr6P1w1w6rOkZOfaHiOYUCLZYFCwf4uUP56WE3J8HqZB9I2CEUtHMx59A6aTG1IUF+Bdek2Ec4LdyRwGI9/Zy38PWyyrP/YIeCVEHJdBhvGhgrmNqNs+7smiH1+Y9qs/HGzk3EMC/JluNBqA0satjteWSMZOj3pY98JiK/fDeotgII5F1HF2QzCuTLudWBiTTN9dG14HgLn9hioxwCQyUxpEXlwtEYq5XZMSQ5xT5zzLRXDa5giOy2hdQfaq5QtsjO16owdWoJ70Tl4AeptHU7c169LinBNcF3NRKlt2x93CGArDy87dYtrV1FTrndF6uXN7gwJU4DrMxyBgemXXeYRDm5V39WpNwBS6rGc3CniKtrLrZW2S2gvD0q6mtD57ZKNi2m1v88cs1gga/ux9wEJSnZshui3idBcte1JHSk7z0Su///4ZZnvUjuc0WSgrqXXJXPef+nY5uqwR1PEIH4G+29g1vg2Go53M0FUBO27vmw1GpMjy/sJGBU+7qlGwItTL62/C4NDx3XetJbDBqJ5mbvLuxhuW1rxqNOXUe+AQYYEy7XylQfZADNgofXNmDyOuOqnELsgGazhBN6HzlBY+9KihxlLo37eIOaGkvO/mhDXmctNiaCzump3bbonIz7IRlYjR3wl/sE2LdCLdAHSpLY2G0GCB/aQdR1wj2hG3aeyTEOL1G+pOwpTW8m4cZUJkcnloQHKMTWebzvMgLLoEzXJgvNEQQ3tT7vtrxUPhv8tNlKSjQquWozo1ALmyR7G8kMovN5DSXk8nuzkujg43Li7lYYbiepKoGwCt/nD23Hu5H4+L0FbeTaNA0+69rJaAEVebHscGgD7N5cMOUcF5VVAUNAd3Dwfqkc0ZK+qme90P7UM/0N3M9RWw0YvTM7RBNb09LmQOmu09rRq9XOb8GaZEgH5qaV7syRTG819q0ytNb46LpGque2BZvt7VbAfQtPXTPMVYW76y/YaWkNObhAYLJmvfmEMbYwtd0r3qmYAf8mMCm7grz+cntpiuusVHIQ903axZcJitg/UIdwAZwZqu4LvPFSfQnxRNuhfltl45Bj+h+e4WFoV5030bCEbzT+RXwM49t96wdGBPN4IMMcGDGj62xS57WK8GiRn/mWwzmX99av1WOc58W/6ZgIvVPIXDojD3sCiSi54XBOJGr3/OdU8oknfbikBYH5AS22DVHgp5MHusPukzkvThavvDo57joDOT3tpX5GO9UX9igq0HB5Y2FT/tTpFYKt4+zDkJZf+ufksTGMWUG9OEY3QJ+9jML5Ac27Oak5yk0A/OgwYjzj7SZtD7lBj0NfmNDIsu4fuZtGYA1b16QaeJITmqmjfIjhSVHTpmducowQK1YxOpJOiVXfZxyaSwfKj0amAGcdN6l9ckaWfZkQ71Ms793dg8pHqaWtRmOALTLLUtgLg9L24tnOTgoa5Vz7oK1djF9nieb6m73AMam5pKhzzdV9XHIl5Il766mYzLqGOzTALNnYscx4lzN9fNynhL3XQyJEgaGlHxBt9nF/S8eF7ydN+YcMI7sBHSVWzGq+spTrNWZ0sY+tS9VU4D99LYQ+zCW12+fOTXj1IDiet2m4woLeu6gHmFzots+rguA2a+9PfMk2s04CmrUYMCwQrPXaKQEyI6DdtqmL4JOJIRfLvJl1fC/fIex33YuJYaK0Or/EoNcMK2XJ2l9tLKDPNjLeYoeCEzdtWh5KUabIUHqgy7nc3LlfbszI525aPq56ZiyE20WyXKipKS5QfvdPKMQ6TZ5TB1A9AQeaXnijSdSm4WVvSy2stV9yyMBHSws5Aj6zh4nud+5De6oqFQtKa6VxNzVTE9m3660mFcUf/dHaez6/19FejpVlQIdJ3f7uMTnDoU06SvtbkkYE1//84qZbe+xXGdhH3d2gcBV5sFIe+CFO2v5n2dfzW9Ex0BdBF85spVVtAMfe+bpumr/4IwW/TW4guLYJweMg/PAT8XXIWs8VhMe15hzMjd3cPxnQDLBDcDv6hzQsqgbfcVfjvgOP833rbQIeCqtD8yh/I2QFPuV9620CGA5mmx5uVPALQTNSd+hwGwHs/RvvK2hc4AmlOW0RfeS9QhsNsV2fw4bM2DOwAfDK8MAThA8tkl+n8UOI2ElM1tk+/DtPu9Hu8CRbKPqdTpwfuSEfQxFKr0frwBKdzcFys/ANis2ROShRnO1FeXu/cAWEDuaItELQgb9bYN9rcB95E1tcJ3A2LkvHghQccAd9mkRt8ej7KJm6pd/QNnweL/Fqtun4V5aKrWZxyrGShX/1fyy2NbX3r2B7zkBRkuTje/FWrNIzM+NC5D6wk4ixS5V0/cDtDZL9qBnIS/qoZw2Zy//VUHbL71mST8NTXE2tBidPxtBmKFE8Mk+e9EBdMDVNH6WLPwE7Dkcq5KYb034HB0/FNXT0+IrPj5olc24hXSrpT6+efSAq4Xk0WEj5op2oGoGKREGHs9LpB74hQWWaqahEovAsorB5hnutsA8OsgacfCf/a9rHMB5ZQDboHWPh8JkWVvpDss1vNODejEwjV5al3z6ieAlTJ9SZovu3OIpK0OnVTqtl/d9hqILmyFd47NS4ifB94++TLy6vw76HiBqbaHVccnu42qYGew0LmwHU7Q2Ov3UeCtANb4JZEyfeeA3ETIUBhlc5P313DRFjg30slCpuUmsiXxhWOy/FSwir9FFPWwFT/8AkytcAOXae0MjSyz/hm4uWBrYaBC2+UqCRoWc38ZcIsC0Rj6tfRQs4VpU4fimC/wy7ZhsDeh10v2j4fM/QsoIvCSnZ+gfXgdq7p3iPKtZtnCQpoXIEmCYpOrxYzTUfUdbGZbqUFoFbT/MygikImFLPJ2MfQ4y+uVY/qqqu73xX8SM3bO14vJ8caLMlea/NyU+qXAjkXJLYTO01VneXXBUSovYzUwSFPx/JcI+B8+NFvTuoH29gAAAABJRU5ErkJggg=="
									alt=""
									width="120"
									height="120"
								/>
								<h1 className="h3 mb-3 ">Sign in to get started!</h1>
								<label htmlFor="username" className="sr-only">
									Username
								</label>
								<input
									type="username"
									id="username"
									name="username"
									className="form-control"
									placeholder="Username"
									required=""
									autoFocus=""
									value={this.state.username}
									onChange={this.handleChange}
								/>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									className="form-control"
									placeholder="Password"
									required=""
									value={this.state.password}
									onChange={this.handleChange}
								/>

								<button className="btn btn-lg btn-primary btn-block" type="submit">
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
				<style jsx>{`
					.bodyCenter {
						width: 380px;
						display: block;
						margin: 0 auto;
						padding: 5%;
						text-align: center;
						box-shadow: 9px 7px 20px -10px rgba(0, 0, 0, 0.75);
						margin-top: 5px;
					}

					.card-space {
						margin-top: 3%;
						padding: 4%;
					}

					.jumbo1 {
						background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
							url('https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');
						background-size: cover;
						// background-position: 60% 50%;
						/* opacity: 80%; */
						// min-height: 300px;
						// padding-top: 20%;
						padding-bottom: 15%;
					}
				`}</style>
			</Layout>
		);
	}
}

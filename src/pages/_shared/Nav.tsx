import { Component } from "react";
import React from "react";
import GitHubLogin from 'react-github-login';
import logo from '../../logo.svg';
import './Nav.css';

// tslint:disable-next-line:no-console
const onSuccess = response => console.log(response);
export default class Nav extends Component {
	public addBrick() {
		//
	}

	public render() {
		return (
			<nav className="navbar is-fixed-top level">
				<div className="navbar-brand">
					<a href="https://webuild.world/" className="navbar-item">
						<img src={logo} className="App-logo" alt="logo" />
						<h1>WeBuild.World</h1>
					</a>
					<a role="button" className="navbar-burger is-expanded burger" data-target="navbarExampleTransparentExample" aria-label="menu"
						aria-expanded="false">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div id="navbarExampleTransparentExample" className="navbar-menu">
					{/* <div className="navbar-start">
						<a className="navbar-item hidden" href="#">Home</a>
					</div> */}
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="field is-grouped">
								<p className="control">
									<a className="bd-tw-button button is-info">
										<span>Add a Brick</span>
									</a>
								</p>

								{this.props.children}

								<p className="control">
									<GitHubLogin oonSuccess={onSuccess}
										clientId='36d1aa5652f688cde83b'
										redirectUri="http://localhost:3000"
										scope="user.email"
									/>
								</p>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
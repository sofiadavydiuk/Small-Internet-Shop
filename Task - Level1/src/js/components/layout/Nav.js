import React from "react";
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class="navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li>
								<Link to="/smartphones">Smartphones</Link>
							</li>
							<li>
								<Link to="/archives">Tablets</Link>
							</li>
							<li>
								<Link to="/settings">TV</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

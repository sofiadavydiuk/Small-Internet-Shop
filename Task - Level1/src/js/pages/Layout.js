import React from "react";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Nav/>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h1 class="main-title">Small Internet Shop</h1>

							{this.props.children}

						</div>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
}

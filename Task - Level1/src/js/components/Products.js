import React from "react";

export default class Products extends React.Component {
	render() {
		let name  = this.props.params.name;
		let price = this.props.params.price;
		let logo  = this.props.params.logo;

		return (
			<div class="col-md-4">
				<div className="product">
					<img src={logo} alt="product" class="product__logo"/>
					<h4 class="product__name">{name}</h4>
					<p class="product__price">{price}</p>
					<a class="btn btn-success product__btn" href="#">More Info</a>
				</div>
			</div>
		);
	}
}

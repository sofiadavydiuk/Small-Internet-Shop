import React from "react";

import Products from "../services/Products";

export default class Tablets extends React.Component {
	render() {
		const Product = [
			{
				"name":  "IPad6",
				"price": "1000zl",
				"logo":  "/img/tablet.jpg"
			}, {
				"name":  "IPad7",
				"price": "1500zl",
				"logo":  "/img/tablet.jpg"
			}, {
				"name":  "IPad7",
				"price": "1500zl",
				"logo":  "/img/tablet.jpg"
			}, {
				"name":  "IPad7",
				"price": "1500zl",
				"logo":  "/img/tablet.jpg"
			}
		].map((params, i) => <Products key={i} params={params}/>);

		return (
			<div>
				<h1 class="section-title">Tablets</h1>

				<div class="row">{Product}</div>
			</div>
		);
	}
}

import React from "react";

import Products from "../components/Products";

export default class TV extends React.Component {
	render() {
		const Product = [
			{
				"name":  "TV1",
				"price": "1000zl",
				"logo":  "/img/tv.jpg"
			}, {
				"name":  "TV2",
				"price": "1500zl",
				"logo":  "/img/tv.jpg"
			}, {
				"name":  "TV2",
				"price": "1500zl",
				"logo":  "/img/tv.jpg"
			}, {
				"name":  "TV2",
				"price": "1500zl",
				"logo":  "/img/tv.jpg"
			}
		].map((params, i) => <Products key={i} params={params}/>);

		return (
			<div>
				<h1 class="section-title">TVs</h1>

				<div class="row">{Product}</div>
			</div>
		);
	}
}

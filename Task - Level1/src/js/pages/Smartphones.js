import React from "react";
import 'whatwg-fetch'

import Products from "../components/Products";

export default class Smartphones extends React.Component {
	render() {

		fetch('/json/smartphones.json')
			.then(function (response) {
				return response.json();
			}).then(function (json) {
			console.log(json);
		}).catch(function (ex) {
			return "parse failed: " + ex;
		});

		const Product = [
			{
				"name":  "Iphone6",
				"price": "100zl",
				"logo":  "/img/smartphone.jpg"
			}, {
				"name":  "Iphone7",
				"price": "150zl",
				"logo":  "/img/smartphone.jpg"
			}, {
				"name":  "Iphone7",
				"price": "150zl",
				"logo":  "/img/smartphone.jpg"
			}, {
				"name":  "Iphone7",
				"price": "150zl",
				"logo":  "/img/smartphone.jpg"
			}
		].map((params, i) => <Products key={i} params={params}/>);

		return (
			<div>
				<h1 class="section-title">Smartphones</h1>

				<div class="row">{Product}</div>
			</div>
		);
	}
}

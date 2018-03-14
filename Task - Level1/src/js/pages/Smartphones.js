import React from "react";
import 'whatwg-fetch'

import Products from "../services/Products";

export default class Smartphones extends React.Component {
	render() {

        let smartpones;

	    $.ajax({
            url: "json/smartphones.json",
            type: 'GET',
            async: false,
            success: function(data) {
                smartpones = data.map((params, i) => <Products key={i} params={params}/>);
            }
        });

		return (
			<div>
				<h1 class="section-title">Smartphones</h1>

				<div class="row">{smartpones}</div>
			</div>
		);
	}
}

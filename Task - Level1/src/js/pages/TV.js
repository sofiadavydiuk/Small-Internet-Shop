import React from "react";

import Products from "../services/Products";

export default class TV extends React.Component {
	render() {

        let tvs;

        $.ajax({
            url: "json/tvs.json",
            type: 'GET',
            async: false,
            success: function(data) {
                tvs = data.map((params, i) => <Products key={i} params={params}/>);
            }
        });

		return (
			<div>
				<h1 class="section-title">TVs</h1>

				<div class="row">{tvs}</div>
			</div>
		);
	}
}

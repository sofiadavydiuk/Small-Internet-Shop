import React from "react";

import Products from "../services/Products";

export default class Tablets extends React.Component {
	render() {

        let tablets;

        $.ajax({
            url: "json/tablets.json",
            type: 'GET',
            async: false,
            success: function(data) {
                tablets = data.map((params, i) => <Products key={i} params={params}/>);
            }
        });

		return (
			<div>
				<h1 class="section-title">Tablets</h1>

				<div class="row">{tablets}</div>
			</div>
		);
	}
}

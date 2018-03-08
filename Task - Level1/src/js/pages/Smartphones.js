import React from "react";

import Products from "../components/Products";

export default class Smartphones extends React.Component {
    render() {
        const Product = [
            {"name": "Iphone6",
                "price": "100zl"},
            {"name": "Iphone7",
                "price": "150zl"}
        ].map((params, i) => <Products key={i} params={params} />);

        return (
            <div>
                <h1>Smartphones</h1>

                <div class="row" >{Product}</div>
            </div>
        );
    }
}

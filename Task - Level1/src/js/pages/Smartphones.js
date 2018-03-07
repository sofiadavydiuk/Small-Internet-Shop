import React from "react";

import Article from "../components/Products";

export default class Featured extends React.Component {
    render() {
        const Articles = [
            ["Iphone 6", "100zl"],
            ["Iphone 6", "100zl"],
            ["Iphone 6", "100zl"],
            ["Iphone 6", "100zl"]
        ].map((title, price, i) => <Article key={i} title={title} price={price}/>);

        return (
            <div>
                <h1>Smartphones</h1>

                <div class="row" >{Articles}</div>
            </div>
        );
    }
}

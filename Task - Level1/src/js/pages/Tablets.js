import React from "react";

import Products from "../components/Products";

export default class Tablets extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { ProductUnknown } = params;

    const { date, filter } = query;

    console.log(ProductUnknown);

    const Product = [
      "Some Products",
      "Some Other Products",
      "Yet Another Products",
      "Still More",
      "Fake Products",
      "Partial Products",
      "American Products",
      "Mexican Products",
    ].map((title, i) => <Products key={i} title={title}/> );

    return (
      <div>
        <h1>Tablets</h1>
        <div class="row">{Product}</div>
      </div>
    );
  }
}

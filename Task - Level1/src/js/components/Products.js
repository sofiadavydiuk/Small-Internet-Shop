import React from "react";

export default class Products extends React.Component {
  render() {
    let attr = this.props;

    console.log(attr);

    return (
      <div class="col-md-4">
        <h4>{this.prop s.params.name}</h4>
        <p>{this.props.params.price}</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}

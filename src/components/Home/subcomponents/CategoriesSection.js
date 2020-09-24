import React, { Component } from "react";
import { categoriesConstants } from "../../../constants/homeConstants";

export default class Categoriessection extends Component {
  renderCategories() {
    return categoriesConstants.map((item) => {
      return (
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div
            className="categories__item set-bg"
            data-setbg="img/categories/cat-1.jpg"
          >
            <div className="categories__hover__text">
              <h5> {item.head} </h5>
              <p> {item.para} </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="categories spad">
        <div className="container">
          <div className="row">{this.renderCategories()}</div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import { categoriesConstants } from "../../constants/homeConstants";

import HeroSection from "./subcomponents/HeroSection";
import CategoriesSection from "./subcomponents/CategoriesSection";

export default class Home extends Component {
  renderCategoriesSection() {
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
      <div className="container-fluid">
        <HeroSection />
        <CategoriesSection />
      </div>
    );
  }
}

import React, { Component } from "react";
import { categoriesConstants, heroItems } from "../../constants/homeConstants";

export default class Home extends Component {
  showHeroMeta(meta) {
    const { by, read, comment } = meta;
    return (
      <ul class="widget">
        <li>
          by <span>{by}</span>
        </li>
        <li>{read} read</li>
        <li>{comment} Comment</li>
      </ul>
    );
  }

  renderHeroSection() {
    return heroItems.map((item) => {
      return (
        <div className="hero__item">
          <div class="container-fluid">
            <div class="row">
              {item.map((data) => {
                const { date, month, labels, caption } = data;
                return (
                  <div class="col-lg-6 p-0">
                    <div
                      class="hero__inside__item hero__inside__item--wide set-bg"
                      data-setbg="img/hero/hero-1.jpg"
                    >
                      <div class="hero__inside__item__text">
                        <div class="hero__inside__item--meta">
                          <span>{date}</span>
                          <p>{month}</p>
                        </div>
                        <div class="hero__inside__item--text">
                          <ul class="label">
                            {labels.map((label) => {
                              return <li>{label}</li>;
                            })}
                          </ul>
                          <h4>
                            {caption[0]}
                            <br /> {caption[1]}
                          </h4>
                          {(() => {
                            if (data.meta) {
                              const { by, read, comment } = data.meta;
                              return (
                                <ul class="widget">
                                  <li>
                                    by <span>{by}</span>
                                  </li>
                                  <li>{read} read</li>
                                  <li>{comment} Comment</li>
                                </ul>
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  }

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
        <section class="hero">
          <div class="hero__slider owl-carousel">
            {this.renderHeroSection()}
          </div>
        </section>
        <section className="categories spad">
          <div className="container">
            <div className="row">{this.renderCategoriesSection()}</div>
          </div>
        </section>
      </div>
    );
  }
}

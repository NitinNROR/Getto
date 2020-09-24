import React, { Component } from "react";
import { heroItems } from "../../../constants/homeConstants";

export default class HeroSection extends Component {
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

  render() {
    return (
      <section class="hero">
        <div class="hero__slider owl-carousel">{this.renderHeroSection()}</div>
      </section>
    );
  }
}

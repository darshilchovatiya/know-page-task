import { Icon } from "@iconify/react";
import React from "react";
import { MarketArray, PlanArray } from "./dumydata";

export default function pricingpage() {
  return (
    <>
      <div id="pricing">
        <div className="container">
          {/* pricing plan text  */}

          <div className="row5">
            <div className="text5">
              <p className="supheading text-center">Pricing Plan</p>
              <h2 className="section-heading text-center">Choose Your Plan</h2>
              <p className="subheading text-center">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium <br />
                lectorum. Mirum est notare quam littera gothica
              </p>
            </div>
          </div>

          {/* pricing plan card */}

          <div className="row6">
            {PlanArray.map((r) => (
              <div className="pricing-card1 text-center ">
                <h4 className="title">{r.title}</h4>
                <div className="price">
                  <span>$</span>
                  {r.price} <span>/mo</span>
                </div>
                <div className="features">
                  <ul>
                    <li>Free Consultation</li>
                    <li>2GB Storage</li>
                    <li>2 Free Download Images</li>
                    <li>Monthly Reports</li>
                    <li>24/7 Full Support</li>
                  </ul>
                </div>
                <div className="action">
                  <button className={`choose-card-btn ${r.abc}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="row7">
            {MarketArray.map((s) => (
              <div className="don1">
                <div className="icon2">
                  <Icon icon={s.icon}  />
                </div>
                <div className="text6">
                  <h2 className="uk5">{s.number}</h2>
                  <p className="caption">{s.head}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

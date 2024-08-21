import { Icon } from "@iconify/react";
import React from "react";
import { CardArray } from "./dumydata";

export default function aboutpage() {
  return (
    <>
      <div id="about">
          <div className="emptybox">
            {/* about text */}

            <div className="container">
              <div className="row1">
                <div className="text">
                  <p className="supheading text-center">Welcome to Jash</p>
                  <h2 className="section-heading text-center">
                    We Have The Best Solutions for
                    <br /> Your Business
                  </h2>
                  <p className="subheading text-center">
                    Claritas est etiam processus dynamicus, qui sequitur
                    <br /> mutationem consuetudium lectorum.{" "}
                  </p>
                </div>
              </div>

              {/* business type card  */}

              <div className="row2">
                {CardArray.map((d) => (
                  <div>
                    <div className="col1">
                      <div className="icon1">
                        <Icon icon={d.icon} height={50} width={50} />
                      </div>
                      <div className="content">
                        <h4 className="title">{d.title}</h4>
                        <div className="text">{d.subtext}</div>
                        <div className="spacer-30">
                          <a href="#" className="pt-5">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* mobile template */}

            <div className="section-border">
              <div className="row-go">
                <div className="mobileimg">
                  <img src="/mobile.png"></img>
                </div>
                <div className="text-mobile">
                  <p class="supheading">No Coding Required</p>

                  <h2 class="section-heading">
                    Develop with KNOX <br />
                    HTML Template
                  </h2>

                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem
                    <br />
                    accusantium dolore mque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo invent.
                  </p>

                  <ul class="list">
                    <li>
                      Offer a broad range of cost-effective industrial solutions
                    </li>
                    <li>Maintain a robust inventory of parts and products</li>
                    <li>Remain responsive to our customers’ needs</li>
                  </ul>

                  <button className="btn-mobile"> View Works</button>
                </div>
              </div>
            </div>

            {/* email card */}

            <div className="box">
              <div className="talktext">
                <div className="coltext">
                  <p className="talk">Let's Talk</p>
                  <h2 className="work">You Ready to Work?</h2>
                  <p className="taxt2">
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium <br />
                    lectorum. Mirum est notare quam littera gothica.
                  </p>
                </div>

                <div className="email">
                  <div className="form">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-email"
                        id="p_email_subscribe"
                        placeholder="Enter your email address"
                      />
                      <button className="Subscribebutton" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

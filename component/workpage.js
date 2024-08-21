import { Icon } from "@iconify/react";
import React from "react";
import Slider from "react-slick";
import { ChatArray } from "./dumydata";

export default function workpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div id="work">
        <div className="container">
          {/* workpage text  */}

          <div className="row3">
            <div className="text3">
              <p className="supheading3 text-center">Screenshot</p>
              <p className="subheading3 text-center">Beautiful Interface</p>

              <h2 className="section-heading3 text-center">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium <br />
                lectorum. Mirum est notare quam littera gothica
              </h2>
            </div>
          </div>

          {/* chat slider  */}
          <div className="row8">
            <Slider {...settings}>
              {ChatArray.map((l) => (
                <div>
                  <div>
                    <img src={l.img}></img>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* video card  */}
        </div>
        <div className="row9">
          <div className="appvdo">
            <div className="text11">
              <p className="supheading6 text-center">Watch Video</p>
              <h2 className="subheading6 text-center">More Than Just App</h2>

              <p className="section-heading6 text-center">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium <br />
                lectorum. Mirum est notare quam littera gothica
              </p>
            </div>
            <div className="playbtn">
              <div className="vdobtn">
                <Icon icon="mdi:play" height={50} width={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

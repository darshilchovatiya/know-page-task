import React from "react";
import Slider from "react-slick";
import { FeturedArray, SliderArray } from "./dumydata";

export default function testimonials() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div id="Testimonials">
        <div className="container">
          {/* <div className="emptybox"> */}
          <div className="testi">
            {/* testimonials text */}

            <div className="row3">
              <div className="text3">
                <p className="supheading3 text-center">Testimonials</p>
                <p className="subheading3 text-center">What People Says</p>

                <h2 className="section-heading3 text-center">
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium <br />
                  lectorum. Mirum est notare quam littera gothica
                </h2>
              </div>
            </div>
          </div>

          {/* <div className="container"> */}
          <div className="w-100 ">
            <Slider {...settings}>
              {SliderArray.map((a) => (
                <div className="box1">
                  <div className="img1">
                    <img src={a.img}></img>
                  </div>
                  <div className="text4">
                    <blockquote>
                      Teritatis et quasi architecto. Sed ut <br />
                      perspiciatis unde omnis iste natus error
                      <br />
                      <a href="#">@rometheme</a> sit voluptatem
                      <br />
                      accusantium dolore mque laudantium,
                      <br /> totam rem aperiam
                    </blockquote>
                    <div className="rating">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <p className="name">{a.name}</p>
                    <p className="bus">Businessman</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* </div> */}

          {/* Featured img*/}
         
        </div>
        <div className="featured4">
        
        <div className="row4">
          <div className="text4">
            <p class="supheading4 text-center">As Featured In</p>
          </div>
          <div className="imglogo">
            {FeturedArray.map((i) => (
              <div className="img4">
                <img src={i.img}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

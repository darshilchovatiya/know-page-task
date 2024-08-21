import { Icon } from "@iconify/react";
import React from "react";

export default function homepage() {
  return (
    <>

      {/* homepage */}
      <div id="home">
        <div className="banner">
          <div className="container h-100 d-flex align-items-center">
            <div className="text1">
              <p className="uk1">ALL YOU NEED IS HERE</p>
              <h1 className="caption-heading">
                Start your business with <br /> JASH
              </h1>
              <p className="uk2">
                We provide high standard clean website for your business
                solutions sit amet consectetuer
                <br /> adipiscing elit, sed diam nonummy nibh euismod.
              </p>
              <div className="videobtn">
                <div className="icon">
                  <Icon icon="lets-icons:video-light"  />
                </div>
                <spam className="btn">Watch Video</spam>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

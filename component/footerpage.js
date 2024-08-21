import React from 'react'
import { SocislArray } from './dumydata'
import { Icon } from '@iconify/react'

export default function footerpage() {
  return (
    <>
     <div className="footer">
          <div className="container">
            <div className="row12">
              <div className="div1">
                <div>
                  <div className="complogo">
                    <img src="/logo.png" alt="Logo" className="logo" />
                  </div>

                  <div className="text-logo">
                    <p className="darsh">
                      <strong>KNOX</strong> is a clean, modern, and fully
                      responsive HTML Template. it is
                      <br /> designed for corporate, finacial, insurance,
                      agency, businesses or any type
                      <br /> of person or business who wants to showcase their
                      work, services and
                      <br />
                      professional way.
                    </p>
                  </div>

                  <div className="mark-1">
                    {SocislArray.map((h) => (
                      <div className="face">
                        <Icon icon={h.icon} height={20} width={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="div2">
                <div className="footer-item">
                  <h2>Quick Links</h2>
                  <ul class="list">
                    <li>
                      <a>About Us</a>
                    </li>
                    <li>
                      <a>Corporate Profile</a>
                    </li>
                    <li>
                      <a>Our Team</a>
                    </li>
                    <li>
                      <a>Portfolio</a>
                    </li>
                    <li>
                      <a>Our Office</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="div3">
                <div className="footer-item">
                  <h2>Get In Touch</h2>
                  <ul class="list">
                    <li>
                      <span className="locat">
                        <Icon icon="mdi:location" />
                      </span>
                      <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                    </li>
                    <li>
                      <span className="locat">
                        <Icon icon="material-symbols:call" />
                      </span>

                      <a>(0761) 654-123987</a>
                    </li>
                    <li>
                      <span className="locat">
                        <Icon icon="ic:baseline-email" />
                      </span>

                      <a>Our Team</a>
                    </li>
                    <li>
                      <span className="locat">
                        <Icon icon="mingcute:time-fill" />
                      </span>

                      <a>info@yoursite.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright card  */}

            
          </div>
          <div className="fcopy">
              <div className="row13">
                <p class="txtcopy text-center">
                  Copyright 2019 ©
                  <span class="copymain">KNOX HTML Template</span>. Designed by{" "}
                  <span class="copymain">Rometheme.</span>
                </p>
              </div>
            </div>
        </div>
    </>
  )
}

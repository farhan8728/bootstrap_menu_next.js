import React from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "../css/home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {} from "@fortawesome/free-regular-svg-icons";


import Navber from "../component/navbar.jsx"

import Logo from "../images/Logo.png"
import Ber from "../images/marquee-ber.png"

import "../images/index"



export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className={Styles.date_icon}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={Styles.dateicon}
                />

                <p className={Styles.date}>
                  বুধবার, ১৯ জুলাই ২০২৩, ৪ শ্রাবণ ১৪৩০
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div>
                <Image
                  src={Logo}
                  width={1000}
                  height={100}
                  alt="Logo"
                  layout="responsive" 
                />
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <FontAwesomeIcon icon={faFacebook} className={Styles.fb} />

              <FontAwesomeIcon icon={faYoutube} className={Styles.youtube} />

              <FontAwesomeIcon icon={faLinkedin} className={Styles.linkedin} />

              <p className={Styles.log_in}>Log In</p>
              <p className={Styles.ln}>English</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Navber />
      </section>


     
    </>
  );
}

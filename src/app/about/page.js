"use client";

import React from "react";
import "../../../public/css/About.css";
import arrow from "../../../public/images/Arrow.png";
import Image from "next/image";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const navigateToForm = () => {
    router.push("/form");
  };
  return (
    <div className="h-[110vh] p-16 a-container bg-white flex gap-4 relative ">
      <div className="col1 w-full h-full flex flex-col">
        <div className="row1 w-full bg-[#eff4ff]">
          <div className="box1">
            <h1>
              <span>About Us</span> <br />
              We are a dedicated team based at UIET, Panjab University,
              Chandigarh, driven by a shared passion for innovation and social
              impact.
            </h1>
            <p>
              Our team is composed of passionate engineers, designers who are
              dedicated to making a positive impact on the lives of blind
              people.We are committed to creating solutions that are both
              functional and easy to use. At the heart of our work lies a deep
              empathy and understanding of the challenges faced by blind
              individuals. Through collaborative efforts and innovative
              thinking, we aim to bridge gaps and foster inclusivity in society.
            </p>
          </div>
        </div>
        <div className="row2 gap-4 flex h-full w-full">
          <div className="box2 bg-[#09374e] text-yellow-300 ">
            <h1>Email</h1>
            <p> teamtechviz@gmail.com</p>
            <h1>Phone</h1>
            <p>+91 9915013842</p>
          </div>
          <div className="box3 bg-[rgb(246,248,250)] text-[#212529] ">
            <h1>Address</h1>
            <p>
              MDART, SBI Atm, Block 3 <br />
              UIET, Panjab University, Sector 25 <br />
              Chandigarh, India
            </p>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-full flex flex-col">
        <Link
          to="section1"
          smooth={true}
          duration={2000}
          className="box4 w-full h-full bg-[#beed3a]"
        >
          <div className="flex-[4] mt-5">
            <h1 className="cursor-pointer">
              Back <br /> to top
            </h1>
          </div>
          <div className="circle">
            <div className="arrow arrow1">
              <ion-icon name="arrow-up-sharp"></ion-icon>
            </div>
            <div className="arrow2">
              <ion-icon name="arrow-up-sharp"></ion-icon>
            </div>
          </div>
        </Link>

        <div className="box5 w-full h-full bg-[#2a27e2] text-white">
          <h1>Get in touch</h1>
          <p>
            We would love to hear from you! <br /> Whether you have any
            questions about our product, need support, or just want to give us
            feedback.
            <br /> Please reach out to us using the contact form below.
          </p>
          <div onClick={navigateToForm}>
            <Image className="w-32" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

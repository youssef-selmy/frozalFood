import React from "react";
import { events } from "../glopals";
import Section from "../components/Section";
import SecHead from "../components/SecHead";
import aboutus from "../assets/SecHead/aboutus.svg";
import aboutFruits from "../assets/imageTwoEdit-Photoroom.png-Photoroom.png";

import Card from "../components/Card";
import target from "../assets/target.svg";
import vision from "../assets/vision.svg";
import logo from "../assets/logo.svg";
import extraLogo from "../assets/extraLogo.svg";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <SecHead
        image={aboutus}
        title="About Us"
        className="py-5 xl:pt-10 px-6 md:px-[80px] xl:px-[140px] 2xl:px-[240px]"
      />
      <Intro />
      <Manufacturing />
      <MAV />
      <Companys />
      {events.length > 0 && <Events />}
    </div>
  );
};

function Intro() {
  return (
    <div className="flex justify-center w-full py-5 pb-20 xl:pt-20 px-6 md:px-[80px] xl:px-[140px] 2xl:px-[240px]">
      <div className="flex flex-col gap-5 w-full max-w-[370px] md:max-w-full md:w-full md:flex-row md:items-center md:justify-evenly">
        <img
          src={aboutFruits}
          alt="Food"
          className="max-w-[400px] md:max-w-[300px] lg:max-w-[500px] bg-white"
          style={{ background: "#fff" }}
        />
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center justify-center"></div>
        </div>
        <p className="text-center md:text-start md:w-[300px] lg:w-[400px] xl:w-[500px] md:text lg:text-lg xl:text-2xl">
          Greetings! We are Frozal Company Producing and exporting frozen{" "}
          <span className="text-main-green font-semibold">Egyptian</span>{" "}
          agricultural products Worldwide, we are exporting to the World &
          European markets and targeting customers importing{" "}
          <span className="text-main-green font-semibold">
            frozen fruits and vegetables.
          </span>
          We provide a high-quality product to give our clients the competitive
          edge necessary to become unique in their market.
        </p>
      </div>
    </div>
  );
}

function Manufacturing() {
  return (
    <div className="bg-manufacturing bg-no-repeat bg-cover bg-bottom h-[480px] justify-center">
      <div className="bg-[#00000050] w-full flex h-full justify-center items-center">
        <div className="px-2 py-8 text-center text-white flex flex-col w-screen gap-5 max-w-[1000px]">
          <h3 className="text-2xl font-medium lg:text-3xl">
            Our Manufacturing process
          </h3>
          <p className="lg:text-xl">
            We carry out all stages of the frozen product process, from the
            beginning of incubating strawberry seedings, planting, harvesting,
            manufacturing, and freezing until it arrives on your doorstep with
            exceptional quality.
          </p>
        </div>
      </div>
    </div>
  );
}

function MAV() {
  return (
    <Section className="flex justify-center gap-5 flex-wrap">
      <Card className="p-5 rounded-md flex flex-col lg:flex-row lg:items-start items-center max-w-[380px] lg:max-w-[500px]">
        <img src={target} alt="Our Mission" />
        <div className="text-center lg:text-start lg:pt-5">
          <h2 className="text-main-green font-medium text-2xl">Our Mission</h2>
          <p className="text-[#828282]">
            Our mission provide natural and pesticide-free frozen vegetables and
            fruits, the production of frozen ready meals at the highest level of
            convenience, and provide any quantity as your needs with high
            standards of food safety & quality and our target is to be Frozal be
            Natural.
          </p>
        </div>
      </Card>
      <Card className="p-5 rounded-md flex flex-col lg:flex-row lg:items-start items-center max-w-[380px] lg:max-w-[500px]">
        <img src={vision} alt="Our Mission" />
        <div className="text-center lg:text-start lg:pt-5">
          <h2 className="text-[#C6A868] font-medium text-2xl">Our Vission</h2>
          <p className="text-[#828282]">
            Our Vision is to be the best Producer and exporter of frozen fruits
            and vegetables brand in worldwide with our values (Credibility,
            Trust, Partnership, Creativity, and Precision)
          </p>
        </div>
      </Card>
    </Section>
  );
}

function Companys() {
  return (
    <Section>
      <h2 className="font-medium text-3xl text-center mb-10">Our Companies</h2>
      <div className="flex justify-evenly">
        <img src={extraLogo} alt="Logo" className="w-[120px] lg:w-[180px]" />
        <img src={logo} alt="Logo" className="w-[120px] lg:w-[180px]" />
      </div>
    </Section>
  );
}

function Events() {
  return (
    <Section className="flex flex-col gap-5">
      <div className="flex gap-2">
        <span className="flex w-1 bg-main-green rounded-lg"></span>
        <h3 className="mb-1 text-xl font-medium xl:text-3xl"> Events </h3>
      </div>

      <div className="flex flex-col items-center w-full gap-10">
        {events.map((ele, i) => (
          <div
            key={i}
            className="flex flex-col gap-5 w-full max-w-[360px] md:flex-row md:max-w-full lg:max-w-[1000px]"
          >
            <div className="">
              <img src={ele.image} alt="Product" className="md:w-[400px]" />
            </div>
            <div className="w-full flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-medium md:text-2xl">{ele.title}</h4>
                <span className="text-[#828282] text-xs md:text-sm">
                  {ele.date}
                </span>
              </div>
              <p className="text-[#828282]">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AboutUs;

import React from "react";
import Section from "../components/Section";
import hero from "../assets/hero.png";
import organic from "../assets/organic.svg";
import natural from "../assets/natural.svg";
import VEG from "../assets/VEG.svg";
import pesticides from "../assets/pesticides.svg";
import qualityFruits from "../assets/imageOneEdit-Photoroom.png-Photoroom.png";

import prods2 from "../assets/prods2.png";
import prods3 from "../assets/prods3.png";
import ISO from "../assets/Certificate/ISO.svg";
import FDA from "../assets/Certificate/FDA.svg";
import BRC from "../assets/Certificate/BRC.svg";
import Kosher from "../assets/Certificate/Kosher.svg";
import Globalgap from "../assets/Certificate/Globalgap.svg";

import Experience from "../assets/OurWorkIcons/Experience.svg"
import Shipment from "../assets/OurWorkIcons/Shipment.svg"
import Services from "../assets/OurWorkIcons/Services.svg"
import years from "../assets/OurWorkIcons/years.svg"
import Qualit from "../assets/OurWorkIcons/Quality.svg"
import GMO from "../assets/OurWorkIcons/GMO.svg"
import partnersMap from "../assets/ourPartner/map.svg"
import desktopFlagsSvg from "../assets/ourPartner/country.svg"
import mobileFlagsSvg from "../assets/ourPartner/mobile.svg"

import image1 from "../assets/hero/image1.png";
import image2 from "../assets/hero/image2.png";
import image3 from "../assets/hero/image3.png";
import image4 from "../assets/hero/image4.png";
import image5 from "../assets/hero/image5.png";

import Brochure from "../assets/Brochure.Frozal.pdf";

import { Link } from "react-router-dom";
import Card from "../components/Card";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <Section className="flex flex-col gap-20">
      <Hero />
      <OurWork />
      <MapForPartners />
      <Specs />
      <Cards />
      <Quality />
      <Packaging />
      <Certificates />
    </Section>
  );
};

function Hero() {
  return (
    <div className="flex flex-col gap-5 md:gap-8 lg:gap-x-10 items-center lg:flex-row-reverse lg:justify-center">
      <Swiper
        // install Swiper modules
        autoplay={{ delay: 4000 }}
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="rounded-2xl w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px] m-0"
      >
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/dglkluhsv/image/upload/v1732786729/xmzmd52nwdtjga90zimf.jpg'
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://res.cloudinary.com/dglkluhsv/image/upload/v1732786863/ajh6vjxewkbavmijzf7r.jpg'
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image1}
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image4}
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image5}
            alt="Hero"
            className="w-[350px] sm:w-[420px] md:w-[450px] lg:w-[410px] xl:w-[500px]"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-col gap-5 sm:w-[450px] md:w-[480px] lg:w-[400px] xl:w-[550px]">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-center lg:text-start">
          Keep it natural  with <br />{" "}
          <span className="text-main-">Frozal</span> 
        </p>

        <p className="text-sm md:text-base lg:text-lg text-[#828282] text-center lg:text-start">
          <span className="text-[#000] font-medium">
            Our IQF fruit & vegetable
          </span>{" "}
          <br /> IQF means Individually Quick Frozen: Each fruit & vegetable
          piece is frozen individually in 10 max 15 minutes: this makes it easy
          to portion and prevents fruit & vegetables from sticking together to
          be available all year round.
        </p>

        <div
          className="myLink flex gap-2 justify-between lg:justify-start flex-wrap"
          style={{ width: "100%", margin: "0 auto" }}
        >
          <Link
            to="/contact-us"
            className="py-2 w-full sm:w-[49%] rounded-xl bg-main-green text-white text-center font-medium"
          >
            Contact Us
          </Link>

          <Link
            to="/about"
            className="py-2 w-full sm:w-[49%] rounded-xl text-main-green border border-main-green text-center font-medium"
          >
            Learn More
          </Link>
          <a
            href={Brochure}
            target="_blank"
            className="brouchers py-2 w-full rounded-xl text-main-green border border-main-green text-center font-medium"
            style={{ width: "100%",color: "#C6A868",borderColor:"#C6A868" }}
          >
            Our Brochure
          </a>
        </div>
      </div>
    </div>
  );
}
function OurWork() {
  const pakeges = [
    { num: "+10", text: "Experience years", icon: Experience },
    { num: "+850", text: "Shipment", icon: Shipment },
    { num: "24/7", text: "Services", icon: Services },
    { num: "18000", text: "Tons/ years", icon: years },
    { num: "100%", text: "Quality", icon: Qualit },
    { num: "100%", text: "GMO Free", icon: GMO },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {pakeges.map((ele, i) => (
          <Card
            key={i}
            className="w-full h-[100px] text-center p-3 rounded-xl flex items-center gap-4 bg-white shadow-lg"
          >
            {/* Image */}
            <img
              className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] object-contain mt-1 mb-1"
              src={ele.icon}
              alt="icon"
            />
            {/* Number and Text */}
            <div className="flex flex-col items-start">
              <p className="font-bold lg:text-xl mt-1 mb-1">{ele.num}</p>
              <p className="text-[10px] lg:text-base font-medium text-[#828282] mt-1">
                {ele.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
function MapForPartners() {
  return (
    <div className="flex flex-col gap-5">
      {/* Title */}
      <h2 className="text-center font-medium text-3xl">Our Partners Worldwide</h2>

      {/* Map Section */}
      <div className="w-full p-4">
        {/* Map Image */}
        <img
          className="w-full h-auto object-cover brightness-70 transition-all duration-1000"
          src={partnersMap}
          srcSet={`${partnersMap}-1x.jpg 1x, ${partnersMap}-2x.jpg 2x, ${partnersMap}-3x.jpg 3x`}
          alt="Our Partners Map"
        />
        
      
        <div >
          {/* Mobile  */}
          <img
            className="w-full h-auto object-cover brightness-70 transition-all duration-1000 sm:hidden"
            src={mobileFlagsSvg}
            alt="Partner Flags Mobile"
          />

          {/* Desktop  */}
          <img
            className="w-full h-auto object-cover brightness-70 transition-all duration-1000 hidden sm:block"
            src={desktopFlagsSvg}
            alt="Partner Flags Desktop"
          />
        </div>
      </div>
    </div>
  );
}





function Specs() {
  const info = [
    { name: "Organic", image: organic },
    { name: "Natural", image: natural },
    { name: "100% VEG", image: VEG },
    { name: "pesticides free", image: pesticides },
  ];
  return (
    <div className="flex flex-wrap gap-5 justify-around py-10 md:justify-evenly">
      {info.map((ele, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <img
            src={ele.image}
            alt="Organic"
            className="w-[60px] sm:w-[70px] md:w-[85px] lg:w-[90px]"
          />
          <p className="text-xs lg:text-xl font-medium">{ele.name}</p>
        </div>
      ))}
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
      <Card className="flex flex-col gap-5 p-5 rounded-3xl max-w-[610px] lg:h-[900px]">
        <div className="max-h-[800px] overflow-hidden rounded-lg bg-gradient-to-b from-[#00000020] to-white">
          <img
            src={prods2}
            alt="Frozen fruit"
            className="w-full h-full object-cover max-h-[600px]"
          />
        </div>
        <p className="text-center text-xl font-semibold">Frozen fruit</p>
        <div className="flex flex-col gap-3 text-base text-gray-500">
          <p>
            Once the fruit has reached the right degree of ripeness, it is
            harvested, processed, and immediately frozen.
          </p>
          <p>we supply you with freshly harvested fruit all year round.</p>
          <p>A vitamin store for the whole year.</p>
        </div>
      </Card>

      <Card className="flex flex-col gap-5 p-5 rounded-3xl max-w-[610px] lg:h-[900px]">
        <div className="max-h-[800px] overflow-hidden rounded-lg bg-gradient-to-b from-[#00000020] to-white">
          <img
            src={prods3}
            alt="Frozen fruit"
            className="w-full h-full object-cover max-h-[600px]"
          />
        </div>
        <p className="text-center text-xl font-semibold">Frozen vegetables</p>
        <div className="flex flex-col gap-3 text-base text-gray-500">
          <p>Freshness of vegetables for your consumer</p>
          <p>
            Our vegetables are always harvested at the optimal time, processed,
            and then gently frozen to preserve their aroma.
          </p>
          <p>
            We offer you frozen vegetable meals at the highest level of
            convenience all year round
          </p>
          <p>A vitamin put in ice for the whole year</p>
        </div>
      </Card>
    </div>
  );
}

function Quality() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex md:hidden gap-2 w-full">
        <span className="flex w-1 bg-main-green rounded-lg"></span>
        <h3 className="mb-1 text-xl font-medium xl:text-3xl"> Quality </h3>
      </div>

      <div className="flex flex-col gap-5 sm:w-[370px] md:w-full md:flex-row-reverse md:items-center md:justify-evenly">
        <div className="flex flex-wrap justify-center items-center gap-5 bg-white">
          <div
            className="flex flex-col items-center justify-center"
            style={{ background: "#fff" }}
          >
            <img
              src={qualityFruits}
              alt="Quality"
              className="md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
              style={{ background: "#fff" }}
            />
          </div>
        </div>

        <div className="h-full flex flex-col gap-5">
          <div className="gap-2 hidden md:flex">
            <span className="flex w-1 bg-main-green rounded-lg"></span>
            <h3 className="mb-1 text-xl font-medium xl:text-3xl"> Quality </h3>
          </div>
          <p className="text-center md:text-start md:w-[300px] lg:w-[400px] md:text-sm lg:text-base xl:text-lg">
            Quality is at the core of our business as a{" "}
            <span className="text-main-green font-semibold">
              food producer and exporter.
            </span>{" "}
            Our professional-quality management begins with the careful
            selection and continuous inspection of our farms and our suppliers
            and extends to monitoring the delivery and packaging processes and
            of course, includes{" "}
            <span className="text-main-green font-semibold">
              internal and external quality control
            </span>{" "}
            of the products and raw materials used in packaging according to the
            highest{" "}
            <span className="text-main-green font-semibold">
              food safety specifications.
            </span>{" "}
            Full traceability of each product to the place of manufacturing is
            the key.
          </p>
        </div>
      </div>
    </div>
  );
}

function Packaging() {
  const pakeges = [
    { num: "400", text: "gm", color: "text-main-blue" },
    { num: "800", text: "gm", color: "text-main-blue" },
    { num: "1.00", text: "kg", color: "text-main-green" },
    { num: "2.5", text: "kg", color: "text-main-green" },
    { num: "10", text: "kg Bluk", color: "text-main-green" },
    { num: "200", text: "kg Octabins", color: "text-main-orange" },
    { num: "350", text: "kg Octabins", color: "text-main-orange" },
    { num: "25", text: "kg bag depend on request", color: "text-main-orange" },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center font-medium text-2xl">Our Packaging</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {pakeges.map((ele, i) => (
          <Card
            key={i}
            className="w-[80px] lg:h-[120px] lg:w-[120px] h-[80px] text-center p-1 rounded-xl flex flex-col justify-evenly"
          >
            <p className={`font-bold lg:text-xl ${ele.color}`}>{ele.num}</p>
            <p className="text-[10px] lg:text-base font-medium">{ele.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}


function Certificates() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center font-medium text-2xl">Our Certificates</h2>
      <div className="flex flex-wrap gap-5 justify-evenly">
        <img className="w-[200px]" src={Kosher} alt="Kosher" />
        <img className="w-[200px]" src={BRC} alt="BRC" />
        <img className="w-[200px]" src={Globalgap} alt="Globalgap" />
        <img className="w-[200px]" src={FDA} alt="FDA" />
        <img className="w-[200px]" src={ISO} alt="ISO" />
      </div>
    </div>
  );
}

export default Home;

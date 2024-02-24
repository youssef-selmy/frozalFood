import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import SecHead from "../components/SecHead";
import longLogo from "../assets/longLogo.svg";
import brand from "../assets/SecHead/brand.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../components/Card";

import { brandScroll, brandFruits, brandVegetables } from "../glopals";

const OurBrand = () => {
  return (
    <Section>
      <SecHead image={brand} title="Our Brand">
        <div className="flex gap-4">
          <img src={longLogo} alt="Logo" className="w-[80px]" />
          <p className="text-xl lg:text-2xl max-w-[500px]">
            We offer our products range of own brand in a modern and attractive
            design.
          </p>
        </div>
      </SecHead>
      <Products />
      <Fruits />
      <Vegetables />
    </Section>
  );
};

function Products() {
  const [size, setSize] = useState(3);
  const [space, setSpace] = useState(50);

  useEffect(() => {
    const pageWidth = window.innerWidth;
    if (pageWidth < 650) {
      setSpace(20);
      setSize(2);
    }
  }, []);

  return (
    <div className="mt-20 flex justify-center relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        spaceBetween={space}
        slidesPerView={size}
        navigation
        className="max-w-[1000px]"
      >
        {brandScroll.map((ele, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gradient-to-b from-[#00000020] to-white flex justify-center py-5 rounded-2xl max-w-[300px] p-5">
              <img src={ele} alt="Product" className="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Fruits() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <h2 className="text-3xl text-center">Fruits</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {brandFruits.map((ele, i) => (
          <Card key={i} className="p-5 rounded-lg">
            <img src={ele.image} alt={ele.name} className="w-[250px]" />
            <p className="text-xl font-medium text-center">{ele.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Vegetables() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <h2 className="text-3xl text-center">Vegetables</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {brandVegetables.map((ele, i) => (
          <Card key={i} className="p-5 rounded-lg">
            <img src={ele.image} alt={ele.name} className="w-[250px]" />
            <p className="text-xl font-medium text-center">{ele.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OurBrand;

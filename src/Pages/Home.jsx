// Home.jsx
import React, { useState, useEffect } from "react";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel";
import FAQ from "../Component/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json") // Replace with the actual path to your JSON file
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-7xl mx-auto my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-60 w-full object-cover rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{brand.name}</h2>
              <p>{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Carousel />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;

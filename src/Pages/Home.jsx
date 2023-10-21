import { useState, useEffect } from "react";
import Banner from "../Component/Banner";
import Carousel from "../Component/Carousel";
import FAQ from "../Component/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();
const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Banner />
      
      <div className="max-w-7xl mx-auto my-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand, index) => (
          <Link to={`/brandProduct/${brand.name}`} key={brand._id}>
          <div key={index} className="card w-96 bg-teal-50 shadow-xl">
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
          </Link>
        ))}
      </div>
      
      <Carousel />
      <FAQ />
      
    </div>
  );
};

export default Home;

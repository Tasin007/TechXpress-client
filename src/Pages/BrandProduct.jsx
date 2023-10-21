import { Link, useLoaderData } from "react-router-dom";

const BrandProduct = () => {
  const product = useLoaderData();
  return (
    <div className="w-full mx-auto">
      {product.length > 0 ? (
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/fNyjzxP/slider-1.png"
              className="w-full h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/g4DLJyf/slider-2.png"
              className="w-full h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Jd4yVk3/slider-3.png"
              className="w-full h-[500px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center font-bold text-3xl my-5 text-gray-500">
          <div className="flex justify-center">
            <img
              className="w-96"
              src="https://i.ibb.co/whGCfwj/No-Product-Found.png"
              alt=""
            />
          </div>
          No Product Found Here <br /> Coming Soon!
        </div>
      )}
      <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {product.map((data) => (
            <div key={data._id}>
              <div className="card bg-stone-300 shadow-xl p-5">
                <img
                  className="rounded-xl h-96 md:h-80 lg:h-96 w-full object-cover"
                  src={data.image}
                  alt=""
                />
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl font-bold my-5">
                    <span className="border-b-2 border-b-black"></span> {data.name}
                  </h2>
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                    <p className="mb-5 text-xl font-semibold">Brand: {data.brandName}</p>
                    <p className="mb-5 text-xl font-semibold">Type: {data.type}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
                    <h2 className="font-semibold text-xl mb-5">Price: {data.price}$</h2>
                    <h2 className="flex text-xl font-semibold mb-5">
                      Rating: {data.rating} <p>\5</p>
                    </h2>
                  </div>
                  <div className="card-actions flex justify-center gap-5">
                    <Link to={`/detailsPage/${data._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                    <Link to={`/updateProducts/${data._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;

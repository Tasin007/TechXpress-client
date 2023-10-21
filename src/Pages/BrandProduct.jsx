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
      <div className="container mx-auto p-10 md:p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
    {product.map((data) => (
      <div key={data._id} className="bg-stone-300 shadow-xl rounded-xl">
        <img
          className="h-96 md:h-80 lg:h-96 w-full object-cover rounded-t-xl"
          src={data.image}
          alt=""
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold my-5 border-b-2 border-b-black">{data.name}</h2>
          <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
            <p className="text-xl font-semibold mb-5">Brand: {data.brandName}</p>
            <p className="text-xl font-semibold mb-5">Type: {data.type}</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
            <h2 className="text-xl font-semibold mb-5">Price: {data.price}$</h2>
            <h2 className="flex text-xl font-semibold mb-5">
              Rating: {data.rating} <p>\5</p>
            </h2>
          </div>
          <div className="flex justify-center gap-5">
            <Link to={`/detailsPage/${data._id}`} className="btn btn-primary">
              Details
            </Link>
            <Link to={`/updateProducts/${data._id}`} className="btn btn-primary">
              Update
            </Link>
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

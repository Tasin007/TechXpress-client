import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    brandName: '',
    type: '',
    price: '',
    shortDescription: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log('Product:', product);
  };

  return (
    <div className='mt-10'>
        <h1 className='text-center text-2xl font-bold'>ADD PRODUCT</h1>
    <form className="max-w-md mx-auto my-10 p-6 bg-slate-300 rounded shadow-lg" onSubmit={handleSubmit}>
        
      <div className="mb-6">
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
          Image
        </label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Image URL"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Product Name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="brandName" className="block mb-2 text-sm font-medium text-gray-900">
          Brand Name
        </label>
        <input
          type="text"
          name="brandName"
          value={product.brandName}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Brand Name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">
          Type
        </label>
        <input
          type="text"
          name="type"
          value={product.type}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
          Price
        </label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Price"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900">
          Short Description
        </label>
        <textarea
          name="shortDescription"
          value={product.shortDescription}
          onChange={handleChange}
          rows="3"
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Short Description"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">
          Rating
        </label>
        <input
          type="text"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Rating"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Add Product
        </button>
      </div>
    </form>
    </div>
  );
};

export default AddProduct

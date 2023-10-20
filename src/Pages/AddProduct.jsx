import React, { useState } from 'react';
import Swal from 'sweetalert2';

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    // Rest of your logic
    console.log(product);

    // Sending data to the server
    fetch('http://localhost:5000/addproduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          // Reset the form after submission
          setProduct({
            image: '',
            name: '',
            brandName: '',
            type: '',
            price: '',
            shortDescription: '',
            rating: '',
          });
        }
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while adding the product',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold">ADD PRODUCT</h1>
      <form
        className="max-w-md mx-auto my-10 p-6 bg-slate-300 rounded shadow-lg"
        onSubmit={handleAddProduct}
      >
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
          <select
            name="type"
            value={product.type}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Type</option>
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
            <option value="Earbud">Earbud</option>
            <option value="Watch">Watch</option>
          </select>
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
          <select
            name="rating"
            value={product.rating}
            onChange={handleChange}
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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

export default AddProduct;

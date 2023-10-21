import toast from "react-hot-toast";
import { useLoaderData,  useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const navigate = useNavigate();
 
 
    const data = useLoaderData();

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const image = form.get('image');
        const name = form.get('name');
        const brandName = form.get('brandName');
        const type = form.get('type');
        const price = form.get('price');
        const shortDescription = form.get('shortDescription');
        const rating = form.get('rating');

        const product = { image, name, brandName, type, price, shortDescription, rating };

        fetch(`http://localhost:5000/updateProduct/${data._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Product Updated Successfully...');
                    navigate(-1)
                }
            })
    }
    return (
        <div>
            <div className="mt-10">
      <h1 className="text-center text-2xl font-bold">UPDATE PRODUCT</h1>
      <form
        onSubmit={handleUpdateProduct}
        className="max-w-md mx-auto my-10 p-6 bg-slate-300 rounded shadow-lg">
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
            Image
          </label>
          <input
            type="text"
            name="image"
            
            defaultValue={data.image}
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
            
            defaultValue={data.name}
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
            
            defaultValue={data.brandName}
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
            defaultValue={data.type}
            
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
            
            defaultValue={data.price}
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
            
            defaultValue={data.shortDescription}
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
            
            defaultValue={data.rating}
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
            UPDATE Product
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateProduct;
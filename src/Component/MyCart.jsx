import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyCart = () => {
    const loader = useLoaderData();
    const [cart, setCart] = useState([])
    
const {user} = useContext(AuthContext);
const userEmail = user?.email;

useEffect(() => ()=>{
    const filterCart = loader?.filter(cart => cart.userEmail === userEmail);
    setCart(filterCart);
},[userEmail, loader])

   const handleDelete = (_id) => {

        fetch(`tech-xpress-server-pj28upzsq-tasins-projects.vercel.app/myCart/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
               toast.success("Your Cart deleted successfully.", "success");
                const remaining = cart.filter((cartID) => cartID._id !== _id);
                setCart(remaining);
              } 
            });
      }
  
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4">

        {
            cart.length === 0 ? ( <div className="max-w-7xl mx-auto col-span-3">
                      <img className="w-20 mx-auto" src="https://i.ibb.co/4NCks3s/icon-not-found.png" alt="" />
                      <p className="text-2xl font-semibold mt-10">Yor cart is Empty</p>
                    </div>
            ) : (
                cart.map( cart => (
                <div key={cart._id}>
                <div className="card h-[500px] shadow-lg compact bg-base-100">
                <figure>
                    <img src={cart.image} alt="" />
                </figure>
                <div className="justify-between card-body">
                    <h2 className="card-title">{cart.name}</h2>
                    <div className="justify-between card-actions">
                    <div className="flex">
                        <div className="badge badge-outline badge-accent">{cart.brandName}</div>
                        <div className="badge badge-outline badge-accent">{cart.type}</div>
                    </div>
                    <div className="justify-end card-actions">
                    {/* deleet button here */}
                        <button onClick={() => handleDelete(cart._id)} className="badge badge-outline font-bold cursor-pointer badge-accent text-center"> delete </button>

                        <div className="badge badge-outline badge-accent">{cart.price}$</div>
                        <div className="badge badge-outline badge-accent">{cart.rating}★</div>
                    </div>
                    </div>
                </div>
                </div>
                </div>)
            
            ))
        }

        </div>

        </div>
    );
};

export default MyCart;
// import React from "react";
// import {useSelector} from 'react-redux';
// import {setCart} from '../slice/CartSlice.jsx';

// const Cart = ({ cartItems, setCartItems }) => {
//   const handleQuantityChange = (id, delta) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(1, item.quantity + delta) }
//           : item
//       )
//     );
//   };


// const selector = useSelector((state)=> state.cart.cart)
//   const handleRemove = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const deliveryCharge = totalPrice > 0 ? 5 : 0;
//   const grandTotal = totalPrice + deliveryCharge;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-fadeIn">
//           Your Cart
//         </h2>
//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500 animate-fadeIn">
//             Your cart is empty 😞
//           </p>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                     <div className="flex items-center space-x-2 mt-2">
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
//                         onClick={() => handleQuantityChange(item.id, -1)}
//                       >
//                         -
//                       </button>
//                       <span className="text-gray-800 font-medium">{item.quantity}</span>
//                       <button
//                         className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
//                         onClick={() => handleQuantityChange(item.id, 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
//                     onClick={() => handleRemove(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}

//               <div>
//                 {selector.map((select,index)=> (
//                    <div key={index}>
//                      <img src={select.img}/>
//                      <h5>{select.name}</h5>
//                    </div>
//                   ))}
//               </div>
//             </div>
//             <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md animate-slideUp">
//               <p className="text-lg font-semibold text-gray-800">Total: <span className="text-gray-700">${totalPrice.toFixed(2)}</span></p>
//               <p className="text-lg font-semibold text-gray-800">Delivery: <span className="text-gray-700">${deliveryCharge.toFixed(2)}</span></p>
//               <h3 className="text-xl font-bold text-gray-900 mt-2">Grand Total: <span className="text-green-600">${grandTotal.toFixed(2)}</span></h3>
//               <button
//                 className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
//                 onClick={() => alert("Your Payment is On Process!")}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;







// src/components/Cart.jsx
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateQuantity, removeFromCart, clearCart } from "../slice/CartSlice.jsx";


// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cart);

//   const offerItem = useSelector((state)=> state.offer.offer);

//   const handleQuantityChange = (id, delta) => {
//     dispatch(updateQuantity({ id, delta }));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const deliveryCharge = totalPrice > 0 ? 5 : 0;
//   const grandTotal = totalPrice + deliveryCharge;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Your Cart
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty 😞</p>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600">
//                       ${item.price ? item.price.toFixed(2) : "0.00"}
//                     </p>

//                     <div className="flex items-center space-x-2 mt-2">
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
//                         onClick={() => handleQuantityChange(item.id, -1)}
//                       >
//                         -
//                       </button>
//                       <span className="text-gray-800 font-medium">
//                         {item.quantity}
//                       </span>
//                       <button
//                         className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
//                         onClick={() => handleQuantityChange(item.id, 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
//                     onClick={() => handleRemove(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
//               <p className="text-lg font-semibold text-gray-800">
//                 Total:{" "}
//                 <span className="text-gray-700">${totalPrice.toFixed(2)}</span>
//               </p>
//               <p className="text-lg font-semibold text-gray-800">
//                 Delivery:{" "}
//                 <span className="text-gray-700">
//                   ${deliveryCharge.toFixed(2)}
//                 </span>
//               </p>
//               <h3 className="text-xl font-bold text-gray-900 mt-2">
//                 Grand Total:{" "}
//                 <span className="text-green-600">
//                   ${grandTotal.toFixed(2)}
//                 </span>
//               </h3>
//               <button
//                 className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
//                 onClick={() => alert("Your Payment is On Process!")}
//               >
//                 Proceed to Checkout
//               </button>
//               <button
//                 className="w-full bg-red-300 text-white font-bold py-3 rounded-lg mt-2 hover:bg-red-400 transition"
//                 onClick={() => dispatch(clearCart())}
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;












// import React, { useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   updateQuantity,
//   removeFromCart,
//   clearCart,
// } from "../slice/CartSlice.jsx";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cart);
//   const offerItems = useSelector((state) => state.offer.offer);

//   const handleQuantityChange = (id, delta) => {
//     dispatch(updateQuantity({ id, delta }));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//     toast.info("Item removed from cart!");
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//     toast.warn("Cart cleared!");
//   };

//   const userProduct = localStorage.getItem('product')

//   const totalPrice = useMemo(() => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   }, [cartItems]);

//   const deliveryCharge = totalPrice > 0 ? 5 : 0;
//   const grandTotal = totalPrice + deliveryCharge;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Your Cart
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty 😞</p>
//         ) : (
//           <>
//             <div className="space-y-4">

//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600">
//                       ${item.price ? item.price.toFixed(2) : "0.00"}
//                     </p>
//                     <div className="flex items-center space-x-2 mt-2">
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
//                         onClick={() =>
//                           item.quantity > 1 &&
//                           handleQuantityChange(item.id, -1)
//                         }
//                       >
//                         -
//                       </button>
//                       <span className="text-gray-800 font-medium">
//                         {item.quantity}
//                       </span>
//                       <button
//                         className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
//                         onClick={() => handleQuantityChange(item.id, 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
//                     onClick={() => handleRemove(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
//               <p className="text-lg font-semibold text-gray-800">
//                 Total:{" "}
//                 <span className="text-gray-700">${totalPrice.toFixed(2)}</span>
//               </p>
//               <p className="text-lg font-semibold text-gray-800">
//                 Delivery:{" "}
//                 <span className="text-gray-700">
//                   ${deliveryCharge.toFixed(2)}
//                 </span>
//               </p>
//               <h3 className="text-xl font-bold text-gray-900 mt-2">
//                 Grand Total:{" "}
//                 <span className="text-green-600">
//                   ${grandTotal.toFixed(2)}
//                 </span>
//               </h3>
//               <button
//                 className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
//                 onClick={() => toast.success("Your Payment is On Process!")}
//               >
//                 Proceed to Checkout
//               </button>
//               <button
//                 className="w-full bg-red-300 text-white font-bold py-3 rounded-lg mt-2 hover:bg-red-400 transition"
//                 onClick={handleClearCart}
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}

//         {/* OFFER SECTION */}
//         {offerItems.length > 0 && (
//           <div className="mt-10">
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//               Special Offers 🔥
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {offerItems.map((offer, index) => (
//                 <div
//                   key={index}
//                   className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition"
//                 >
//                   <img
//                     src={offer.img}
//                     alt={offer.name}
//                     className="w-full h-32 object-cover rounded"
//                   />
//                   <h4 className="text-md font-semibold mt-2">{offer.name}</h4>
//                   <p className="text-gray-700">${offer.price.toFixed(2)}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <ToastContainer position="top-center" autoClose={2000} />
//     </div>
//   );
// };

// export default Cart;









 //first

// import React, { useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   updateQuantity,
//   removeFromCart,
//   clearCart,
// } from "../slice/CartSlice.jsx";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cart);
//   const offerItems = useSelector((state) => state.offer.offer);

//   const handleQuantityChange = (id, delta) => {
//     dispatch(updateQuantity({ id, delta }));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//     toast.info("Item removed from cart!");
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//     toast.warn("Cart cleared!");
//   };

//   const userProduct = localStorage.getItem('product')

//   const totalPrice = useMemo(() => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   }, [cartItems]);

//   const deliveryCharge = totalPrice > 0 ? 5 : 0;
//   const grandTotal = totalPrice + deliveryCharge;

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Your Cart
//         </h2>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty 😞</p>
//         ) : (
//           <>
//             <div className="space-y-4">


//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//                 >
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {item.name}
//                     </h3>
//                     <p className="text-gray-600">
//                       ${item.price ? item.price.toFixed(2) : "0.00"}
//                     </p>
//                     <div className="flex items-center space-x-2 mt-2">
//                       <button
//                         className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
//                         onClick={() =>
//                           item.quantity > 1 &&
//                           handleQuantityChange(item.id, -1)
//                         }
//                       >
//                         -
//                       </button>
//                       <span className="text-gray-800 font-medium">
//                         {item.quantity}
//                       </span>
//                       <button
//                         className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
//                         onClick={() => handleQuantityChange(item.id, 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
//                     onClick={() => handleRemove(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
//               <p className="text-lg font-semibold text-gray-800">
//                 Total:{" "}
//                 <span className="text-gray-700">${totalPrice.toFixed(2)}</span>
//               </p>
//               <p className="text-lg font-semibold text-gray-800">
//                 Delivery:{" "}
//                 <span className="text-gray-700">
//                   ${deliveryCharge.toFixed(2)}
//                 </span>
//               </p>
//               <h3 className="text-xl font-bold text-gray-900 mt-2">
//                 Grand Total:{" "}
//                 <span className="text-green-600">
//                   ${grandTotal.toFixed(2)}
//                 </span>
//               </h3>
//               <button
//                 className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
//                 onClick={() => toast.success("Your Payment is On Process!")}
//               >
//                 Proceed to Checkout
//               </button>
//               <button
//                 className="w-full bg-red-300 text-white font-bold py-3 rounded-lg mt-2 hover:bg-red-400 transition"
//                 onClick={handleClearCart}
//               >
//                 Clear Cart
//               </button>
//             </div>
//           </>
//         )}

//         {/* OFFER SECTION */}
//         {offerItems.length > 0 && (
//           <div className="mt-10">
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">
//               Special Offers 🔥
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {offerItems.map((offer, index) => (
//                 <div
//                   key={index}
//                   className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition"
//                 >
//                   <img
//                     src={offer.img}
//                     alt={offer.name}
//                     className="w-full h-32 object-cover rounded"
//                   />
//                   <h4 className="text-md font-semibold mt-2">{offer.name}</h4>
//                   <p className="text-gray-700">${offer.price.toFixed(2)}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <ToastContainer position="top-center" autoClose={2000} />
//     </div>
//   );
// };

// export default Cart;



















//second

import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../slice/CartSlice.jsx";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const offerItems = useSelector((state) => state.offer.offer);

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ id, delta }));
  };

  const productEmail = localStorage.getItem('email');
//   const handleRemove = async(id)=>{
//   try {
//     const res = await axios.delete(`http://192.168.43.252:3000/delete/${id}`, {
//       data: { productEmail }
//     });

//     if (res.status === 200) {
//       // Remove item from Redux
//       dispatch(removeFromCart(id));
//       toast.info("Item removed from cart!");
//       const deletedItemName = res.data.name;
//       const userData = JSON.parse(localStorage.getItem('userProduct')) || []
//       const updatedData = userData.filter(item => item.name !== deletedItemName);
//       localStorage.setItem('userProduct', JSON.stringify(updatedData));
//       localStorage.setItem('productLength', updatedData.length.toString());

//     } else {
//       toast.error("Failed to remove item from backend.");
//     }

//   } catch (err) {
//     console.error(`Error is: ${err.message}`);
//     toast.error(`Error: ${err.message}`);
//   }
// };

const handleRemove = async (id) => {
  try {
    const res = await axios.delete(`http://192.168.43.252:3000/delete/${id}`, {
      data: { productEmail }
    });

    if (res.status === 200) {
      // Remove item from Redux
      dispatch(removeFromCart(id));
      toast.info("Item removed from cart!");

      const deletedItemName = res.data.name;

      // Safe parse userProduct from localStorage
      let userData = [];
      try {
        const data = localStorage.getItem('userProduct');
        userData = JSON.parse(data);
        if (!Array.isArray(userData)) {
          console.error("Expected an array for userProduct but got:", userData);
          userData = [];
        }
      } catch (e) {
        console.error("Error parsing userProduct:", e.message);
        userData = [];
      }

      const updatedData = userData.filter(item => item.name !== deletedItemName);
      localStorage.setItem('userProduct', JSON.stringify(updatedData));
      localStorage.setItem('productLength', updatedData.length.toString());

    } else {
      toast.error("Failed to remove item from backend.");
    }

  } catch (err) {
    console.error(`Error is: ${err.message}`);
    toast.error(`Error: ${err.message}`);
  }
};


  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warn("Cart cleared!");
  };
  const userData = JSON.parse(localStorage.getItem('userProduct')) || [];
  const userLength = localStorage.getItem('productLength')
  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const deliveryCharge = totalPrice > 0 ? 5 : 0;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Your Cart
        </h2>

        {userLength.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty 😞</p>
        ) : (
          <>
            <div className="space-y-4">


              {userData.map((item,index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">
                      ${item.price ? item.price.toFixed(2) : "0.00"}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                        onClick={() =>
                          item.quantity > 1 &&
                          handleQuantityChange(item.id, -1)
                        }
                      >
                        -
                      </button>
                      <span className="text-gray-800 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">
                Total:{" "}
                <span className="text-gray-700">${totalPrice.toFixed(2)}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Delivery:{" "}
                <span className="text-gray-700">
                  ${deliveryCharge.toFixed(2)}
                </span>
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                Grand Total:{" "}
                <span className="text-green-600">
                  ${grandTotal.toFixed(2)}
                </span>
              </h3>
              <button
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
                onClick={() => toast.success("Your Payment is On Process!")}
              >
                Proceed to Checkout
              </button>
              <button
                className="w-full bg-red-300 text-white font-bold py-3 rounded-lg mt-2 hover:bg-red-400 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}

        {/* OFFER SECTION */}
        {offerItems.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Special Offers 🔥
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {offerItems.map((offer, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={offer.img}
                    alt={offer.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <h4 className="text-md font-semibold mt-2">{offer.name}</h4>
                  <p className="text-gray-700">${offer.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Cart;
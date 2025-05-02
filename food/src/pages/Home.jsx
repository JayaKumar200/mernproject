import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import pizza from "../assets/pizza.jpg";
import premium from "../assets/premium.jpg";
import sushi from "../assets/sushi.jpg";
import hamburger from "../assets/hamburger.jpg";
import chicken from "../assets/chicken.jpg";
import baiq from "../assets/baiq-daling-ykThMylLsbY-unsplash.jpg";
import brooke from "../assets/brooke-lark-jUPOXXRNdcA-unsplash.jpg";
import {useDispatch} from 'react-redux';
import {setIncrease} from '../slice/Slice';
import {addToCart} from '../slice/CartSlice.jsx';
import axios from 'axios';


const Home = ({}) => {
  const messages = useRef([
    "👋 Welcome to JK Instamat! Your favorite meals, delivered fresh & fast! 🚀🍔",
    "Hey there, foodie! 🍕 Craving something delicious? We’ve got you covered! 😋",
    "🎉 Welcome to JK Instamat! First-time users get 10% OFF on their first order! 🍔🎊",
    "🚀 Hungry? Let’s Fix That! Order now & enjoy delicious meals at your doorstep! 🍕🍟",
  ]);


 const productEmail = localStorage.getItem('email')

  const [content, setContent] = useState(messages.current[0]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.current.length;
      setContent(messages.current[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const foodItems = useMemo(
    () => [
      { img: baiq, name: "Idly",price:15 },
      { img: brooke, name: "Fruit Salad",price: 50 },
      { img: chicken, name: "Fried Chicken" , price: 200 },
      { img: premium, name: "Croissant",price:300 },
      { img: sushi, name: "Sushi",price:900 },
    ],
    []
  );
  
  const email = localStorage.getItem('email')


  const scrollLeft = useCallback(() => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }, []);



const handleCart = async (item) => {
  try {
    const product = await axios.post('https://mernproject-1-m8dp.onrender.com/product', {
      item,
      productEmail,
    });

    if (product.status === 200) {
      navigate("/cart");
      dispatch(setIncrease());
      dispatch(addToCart(item));
      alert("Product is moved to cart");

      // Store products array safely
      const products = product.data.products;
      if (Array.isArray(products)) {
         localStorage.setItem("userProduct", JSON.stringify(product.data.products));
          localStorage.setItem('productLength', products.length.toString());
        console.log("Saved products to localStorage", products);
      } else {
        console.warn("Products data is not an array:", products);
      }

    } else {
      console.log("Product API returned an error status.");
    }

  } catch (err) {
    console.log(`Error is ${err.message}`);
    alert(`Error is ${err.message}`);
  }
};


  return (
        <div>
      <Navbar />
      <h2 className="text-center text-4xl font-bold py-6 animate-pulse my-6">JK-Instamat</h2>
      <h2 className="text-center text-lg italic text-white bg-black/50 px-4 py-2 rounded-md mx-auto w-fit">{content}</h2>

      <h2 className="text-3xl font-semibold text-center my-6">What's on Your Mind?</h2>
      <div className="relative flex items-center overflow-x-hidden">
        <button className="absolute left-0 bg-black/60 px-4 py-2 rounded-full hover:bg-black" onClick={scrollLeft}>
          &#8592;
        </button>
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto p-4 scrollbar-hide">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white/20 rounded-lg p-4 text-center shadow-lg transform hover:scale-105 transition-transform"
            >
              <img src={item.img} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
              <p className="mt-2 font-semibold">{item.name}</p>
              <button
                className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition-all"
                onClick={() => handleCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button className="absolute right-0 bg-black/60 px-4 py-2 rounded-full hover:bg-black" onClick={scrollRight}>
          &#8594;
        </button>
      </div>

      <h2 className="text-3xl text-center mt-10">Explore More Delicacies</h2>
      <div className="food-gallery flex flex-wrap justify-center gap-4 p-4">
        {[pizza, premium, sushi, chicken, hamburger].map((foodImg, index) => (
          <div key={index} className="w-40 h-40 bg-white/20 rounded-lg shadow-md hover:scale-105 transition-transform">
            <img src={foodImg} alt="Food" className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </div>

      <h2 className="text-center text-2xl mt-10">📍 Our Location: Chennai</h2>
      <div className="p-4 flex justify-center">
        <iframe
          title="Chennai Map"
          className="w-full max-w-3xl h-72 rounded-lg"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <footer className="text-center py-4 bg-black text-white mt-6">
        <p>© {new Date().getFullYear()} JK Instamat. All Rights Reserved.</p>
        <p className="text-sm text-gray-300">Disclaimer: JK Instamat is an independent food delivery service.</p>
      </footer>
    </div>
    
  );
};

export default Home;

// import { useState } from "react";
// import "tailwindcss/tailwind.css";
// import axios from 'axios'
// import {useSelector,useDispatch} from 'react-redux';
// import {setLogin} from '../slice/LoginData.jsx';
// const Login = () => {

//   const [loginData,setLoginData]=useState({
//     email:'',
//     password:''
//   })
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();


//   const selector = useSelector((state)=> state.sign.userData);

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(email);
//   };

//   const token = localStorage.getItem('token');

// const handleLogin = async () => {
//   try {
//     setError("");


//     if (!validateEmail(loginData.email)) {
//       setError("Enter a valid email address!");
//       return;
//     }

//     if (loginData.password.length < 6) {
//       setError("Password must be at least 6 characters long!");
//       return;
//     }

//     dispatch(setLogin(loginData));

//     const login = await axios.post('http://localhost:3000/login', loginData, {
//       headers: {
//         Authorization: `Bearer ${token}`, 
//       },
//     });

//     if (login.status === 200) {
//       alert("Login successful!");
//     } else {
//       console.log('Unexpected response:', login.status);
//     }

//   } catch (err) {
//     console.log(err.message);
//     setError("Login failed. Please try again.");
//   }
// };




//   const handleLoginData=(e)=>{
//    const {name,value}=e.target;

//    setLoginData((current)=>({
//      ...current,
//      [name]:value
//    }))
//  }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center animate-fadeIn">
//         <h1 className="text-3xl font-bold text-gray-800">Login</h1>
//         {/*<h2 className="text-lg text-gray-600 mt-2">Welcome, {selector || "Guest"}!</h2>*/}
//          <h2 className="text-lg text-gray-600 mt-2">Welcome !</h2>

//         <div className="mt-4">
//           <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//             placeholder="Enter your Email"
//             type="email"
//             name="email"
//             value={loginData.email}
//             onChange={handleLoginData}
//           />
//         </div>
//         <div className="mt-4">
//           <input
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
//             placeholder="Enter your Password"
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleLoginData}
//           />
//         </div>
//         {error && <p className="text-red-500 mt-2">{error}</p>}

//         <button
//           className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-4 font-semibold hover:bg-yellow-400 transition duration-300"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;






import { useState} from "react";
import {useNavigate} from 'react-router-dom';
import "tailwindcss/tailwind.css";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setLogin } from '../slice/LoginData.jsx';
import {setName} from '../slice/LoginName.jsx';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const nameDispatch = useDispatch();

  const navigate = useNavigate();
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const token = localStorage.getItem('token')

  const handleLogin = async () => {
    try {
      setError("");

      if (!validateEmail(loginData.email)) {
        setError("Enter a valid email address!");
        return;
      }

      if (loginData.password.length < 6) {
        setError("Password must be at least 6 characters long!");
        return;
      }
   
      dispatch(setLogin(loginData));
      const login = await axios.post('http://192.168.43.252:3000/login',loginData
    //     ,{
    //     headers: {
    //     Authorization: `Bearer ${token}`, 
    //   },
    // });
        )

      if (login.status === 200){
        alert("Login successful!");
        console.log(login.data)
        localStorage.setItem('userName',login.data.user.username)
        localStorage.setItem('email',login.data.user.email)
        localStorage.setItem('token', login.data.user.token); 
        nameDispatch(setName(login.data.user.username))
         navigate("/")
      }
       else {
        console.log('Unexpected response:', login.status);
      }

    } catch (err) {
      console.log(err.message);
      setError("Login failed. Please try again.");
    }
  };

  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((current) => ({
      ...current,
      [name]: value
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center animate-fadeIn">
        <h1 className="text-3xl font-bold text-gray-800">Login</h1>
        <h2 className="text-lg text-gray-600 mt-2">Welcome!</h2>

        <div className="mt-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            placeholder="Enter your Email"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginData}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginData}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          className="w-full bg-yellow-500 text-black py-3 rounded-lg mt-4 font-semibold hover:bg-yellow-400 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

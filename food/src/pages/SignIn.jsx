// import { useState,useEffect} from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {useDispatch,useSelector} from 'react-redux';
// import {setData} from '../slice/SigninSlice.jsx'; 

// const SignIn = () => {
//   const [user,setUser]=useState({
//     userName:'',
//     email:'',
//     password:''
//   })
//   const navigate = useNavigate();
//   const dispatch = useDispatch()

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(email);
//   };

//   console.log(dispatch);

//   const handleSignin = () => {
//     if (userName.length < 7) {
//       alert("Username must be at least 7 characters long!");
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert("Enter a valid email address!");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters long!");
//       return;
//     }

//     alert("Sign-in successful!");
//     navigate("/login");
//     dispatch(setData(user));
//   };

//   const handleUserData=(e)=>{
//     const {name , value} = e.target;

//     setUser((current)=> {
//       return{
//         ...current,[name]:value,

//       }
//     })
      
   
//   }

//   useEffect(() => {
//   dispatch(setData(user))
// }, [user])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign In</h1>
//         <h2 className="text-lg text-center text-gray-600 mb-6">Welcome to JK Instamat</h2>

//         <input
//           className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter the Username"
//           type="text"
//           value={user.userName}
//           name='username'
//           onChange={handleUserData}
//         />

//         <input
//           className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter the Email"
//           type="email"
//           name='email'
//           value={user.email}
//           onChange={handleUserData}
//         />

//         <input
//           className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter the Password"
//           type="password"
//           name='password'
//           value={user.password}
//           onChange={handleUserData}
//         />

//         <button
//           className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
//           type="submit"
//           onClick={handleSignin}
//         >
//           Sign In
//         </button>

//         <h3 className="text-center text-gray-600 mt-4">
//           Already have an account? 
//           <Link className="text-blue-500 hover:underline ml-1" to="/login">
//             Login Here
//           </Link>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setData } from '../slice/SigninSlice.jsx';
import axios from 'axios'

const SignIn = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

const handleSignin = async () => {
  try {
    const { userName, email, password } = user;

    if (userName.length < 7) {
      alert("Username must be at least 7 characters long!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    dispatch(setData(user));

   const signin = await axios.post("http://192.168.43.252:3000/signup", user);

    if (signin.status === 201) {
      alert("Sign-in successful!");
      console.log(signin.data.token)
      console.log(signin.data)
      localStorage.setItem('token', signin.data.token); 
      navigate("/login");
    } else {
      console.log('Unexpected response status:', signin.status);
    }
  } catch (err) {
    console.log(err.message);
    alert("Sign-in failed!");
  }
};


  const handleUserData = (e) => {
    const { name, value } = e.target;

    setUser((current) => ({
      ...current,
      [name]: value
    }));
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign In</h1>
        <h2 className="text-lg text-center text-gray-600 mb-6">Welcome to JK Instamat</h2>

        <input
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Username"
          type="text"
          value={user.userName}
          name="userName"
          onChange={handleUserData}
        />

        <input
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserData}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleUserData}
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          type="submit"
          onClick={handleSignin}
        >
          Sign In
        </button>

        <h3 className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link className="text-blue-500 hover:underline ml-1" 
           to='/login'>
            Login Here
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;











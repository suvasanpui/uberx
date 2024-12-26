import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";
import { useContext, useState } from "react";


const UserSignup = () => {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const {user,setUser}=useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    }
    const url=`${import.meta.env.VITE_BASE_URL}/users/signup`;
    const response = await axios.post(url, newUser);
    if (response.status === 200) {
      const data=response.data
      setUser(data.user);
      localStorage.setItem('token', data.token)
      console.log("User Created");
      navigate('/home');
    }
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 mb-5" src="Uber_logo.png" />
        <form onSubmit={submitHandler}>
          <h3 className=" text-base font-medium mb-2">Enter your Name</h3>
          <div className=" flex gap-4 mb-4">
            <input
              required
              className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}

            />
            <input
              required
              className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
            />
          </div>

          <h3 className=" text-base font-medium mb-2">Enter your Email</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-bae placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <h3 className=" text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-7 px-4 py-2 border w-full text-base placeholder:text-sm">
            Signup
          </button>
        </form>
        <p className=" text-center">
          Already have a account?{" "}
          <Link to="/login" className=" text-blue-600">
            Login as a User
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          {" "}
          This site is Protected by reCAPTCHA and the{" "}
          <span className=" underline">Google Privacy Policy</span> and{" "}
          <span className=" underline">Term of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

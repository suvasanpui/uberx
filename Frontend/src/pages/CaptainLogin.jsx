import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import {CaptainDataContext} from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const { captain,setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    const url = `${import.meta.env.VITE_BASE_URL}/captains/login`;
    const response = await axios.post(url, captainData);
    if (response.status === 200) {
      const data = await response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain/home");
    }
  };


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-20 mb-5" src="Uber_logo.png" />
        <form onSubmit={submitHandler}>
          <h3 className=" text-lg font-medium mb-2">Enter your Email</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className=" text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-7 px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
          
        </form>
        <p className=" text-center">
            New here?{" "}
            <Link to='/captainsignup' className=" text-blue-600">Register as a Captain</Link>
          </p>
      </div>
      <div>
        <Link  to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

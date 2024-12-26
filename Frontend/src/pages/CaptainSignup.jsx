import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vechileColor, setvechileColor] = useState("");
  const [vechilePlate, setvechilePlate] = useState("");
  const [vechileCapacity, setvechileCapacity] = useState("");
  const [vechileType, setvechileType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();
  

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password,
      vechile:{
        color:vechileColor,
        plate:vechilePlate,
        capacity:vechileCapacity,
        vechileType:vechileType
      }
    }
    const url=`${import.meta.env.VITE_BASE_URL}/captains/signup`;
    const response = await axios.post(url, captainData);
    if (response.status === 200) {
      const data=response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token)
      console.log("captain Created");
      navigate('/captain/home');
    }else{
      console.log("Error in creating captain");
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
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              required
              className=" bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className=" text-base font-medium mb-2">Enter your Email</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-bae placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className=" text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className=" text-base font-medium mb-2">vechile Information</h3>
          <div className=" flex gap-4 mb-4">
            <input
              required
              className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="text"
              placeholder="vechile Color"
              value={vechileColor}
              onChange={(e) => setvechileColor(e.target.value)}
            />
            <input
              required
              className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="text"
              placeholder="vechile Plate"
              value={vechilePlate}
              onChange={(e) => setvechilePlate(e.target.value)}
            />
            <input
              required
              className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="number"
              placeholder="vechile Capacity"
              value={vechileCapacity}
              onChange={(e) => setvechileCapacity(e.target.value)}
            />
          </div>
          <div className=" flex gap-4 mb-4">
            <select
              required
              className=" bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              value={vechileType}
              onChange={(e) => setvechileType(e.target.value)}
            >
              <option value="" disabled>
                Select vechile Type
              </option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="cycle">Cycle</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-7 px-4 py-2 border w-full text-base placeholder:text-sm">
            Signup
          </button>
        </form>
        <p className=" text-center">
          Already have a account?{" "}
          <Link to="/captainlogin" className=" text-blue-600">
            Login as a Captain
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

export default CaptainSignup;

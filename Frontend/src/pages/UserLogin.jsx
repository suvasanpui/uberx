import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const url = `${import.meta.env.VITE_BASE_URL}/users/login`;
    const response = await axios.post(url, userData);
    if (response.status === 200) {
      const data = await response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="Uber_logo.png" />
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
          <button className="bg-[#111] rounded-sm text-white font-semibold mb-7 px-4 py-2 border w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className=" text-center">
          New here?{" "}
          <Link to="/signup" className=" text-blue-600">
            Create a new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captainlogin"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 border w-full text-lg placeholder:text-base"
        >
          Sign in as a Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

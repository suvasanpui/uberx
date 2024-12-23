import { Link } from "react-router-dom";

const CaptainLogin = () => {

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-20 mb-5" src="Uber_logo.png" />
        <form>
          <h3 className=" text-lg font-medium mb-2">Enter your Email</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className=" text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className=" bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
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

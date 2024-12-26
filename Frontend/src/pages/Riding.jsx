import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className=" h-screen">
    <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white items-center flex justify-center rounded-full">
    <i className="text-lg font-bold ri-home-9-fill"></i>
    </Link>
      <div className=" h-1/2">
        <img className="h-full w-full object-cover" src="map2-images.gif" />
      </div>
      <div className="h-1/2 px-5 py-4">
        <div className="flex items-center gap-10 pb-5">
          <img className="h-10 rounded-lg " src="driver-images.jpg"></img>
          <div className="text-left">
            <h2 className="text-xl font-medium">Suva</h2>
            <h4 className="text-base font-semibold">WB123456</h4>
            <p className="text-sm text-gray-700">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className=" gap-3 flex flex-col justify-between items-center">
          <div className="w-full">
            <div className="flex items-center gap-4 p-3 border-b-2  ">
              <i className=" text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-sans">518/54</h3>
                <p className="text-sm text-gray-600 -mt-2">saran, Kolkata</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 border-b-2  ">
              <i className="text-lg ri-building-line"></i>
              <div>
                <h3 className="text-lg font-sans">kol</h3>
                <p className="text-sm text-gray-600 -mt-2">saran, Kolkata</p>
              </div>
            </div>
            <div className="flex items-center gap-4  p-3">
              <i className=" text-lg ri-money-rupee-circle-fill"></i>

              <div>
                <h3 className="text-lg font-sans">198</h3>
                <p className="text-sm text-gray-600 -mt-2">saran, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-400 text-white font-semibold p-2 rounded-lg ">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;

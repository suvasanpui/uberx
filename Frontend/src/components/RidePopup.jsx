

const RidePopup = ({setRidePopup , setConfirmedRidePopupPanel}) => {
    return (
      <div>
        <h5
          onClick={() => setRidePopup(false)}
          className=" absolute top-6 right-6 text-gray-500 text-2xl"
        >
          <i className=" text-gray-700 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Avalable !</h3>
        <div className="flex items-center justify-between bg-yellow-400 p-3 rounded-lg">
          <div className=" flex gap-2 items-center">
            <img
              className="h-10 w-10 rounded-full "
              src="/driver-images.jpg"
              alt=""
            />
            <h2 className="text-lg font-medium ">ajay saxena</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2KM</h5>
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
          <button
            onClick={() => {
              setConfirmedRidePopupPanel(true),
              setRidePopup(false) //i think this line is problem
              }
            }
            className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg "
          >
            Accept
          </button>

          <button
            onClick={() => {
              setRidePopup(false);
            }}
            className="w-full mt-2 bg-red-500 text-white font-semibold p-2 rounded-lg "
          >
            Ignore
          </button>
        </div>
      </div>
    );
}

export default RidePopup
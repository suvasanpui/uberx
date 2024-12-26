

const LookingForDriver = ({setVehicleFound,setWaitingForDriverPanel}) => {
  return (
    <div>
      <h5
        onClick={() => setVehicleFound(false)}
        className=" absolute top-6 right-6 text-gray-500 text-2xl"
      >
        <i className=" text-gray-700 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">LookingForDriver</h3>

      <div className=" gap-3 flex flex-col justify-between items-center">
        <img className="h-20" src="car-images.png" alt="" />
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
    </div>
  )
}

export default LookingForDriver
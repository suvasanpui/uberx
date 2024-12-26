

const VehiclePanel = ({setVehiclePanelOpen,setConfirmedRidePanelOpen}) => {
  return (
    <div>
        <h5
          onClick={() => setVehiclePanelOpen(false)}
          className=" absolute top-6 right-6 text-gray-500 text-2xl"
        >
          <i className=" text-gray-700 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=>{
          setConfirmedRidePanelOpen(true),
          setVehiclePanelOpen(false)
        }}  className="mb-3 flex border-2 active:border-black rounded-xl items-center p-3 w-full justify-between bg-gray-200">
          <img className=" h-8" src="car-images.png" alt="" />
          <div className=" w-1/2">
            <h4 className=" font-medium">
              UberGo{" "}
              <span>
                {" "}
                <i class="ri-user-fill" />4
              </span>
            </h4>
            <h5 className=" font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-800">
              Affortable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">
            <i class="ri-money-rupee-circle-fill" />
            158
          </h2>
        </div>

        <div onClick={()=>{
          setConfirmedRidePanelOpen(true),
          setVehiclePanelOpen(false)
        }} className="mb-3 flex border-2 active:border-black rounded-xl items-center p-3 w-full justify-between bg-gray-200">
          <img className=" h-12" src="bike-images.png" alt="" />
          <div className=" w-1/2">
            <h4 className=" font-medium">
              Moto{" "}
              <span>
                {" "}
                <i class="ri-user-fill" />1
              </span>
            </h4>
            <h5 className=" font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-800">
              Affortable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">
            <i class="ri-money-rupee-circle-fill" />
            120
          </h2>
        </div>

        <div onClick={()=>{
          setConfirmedRidePanelOpen(true),
          setVehiclePanelOpen(false)
        }} className="mb-3 flex border-2 active:border-black rounded-xl items-center p-3 w-full justify-between bg-gray-200">
          <img className=" h-12" src="cycle2-images.png" alt="" />
          <div className=" w-1/2">
            <h4 className=" font-medium">
              Cycle{" "}
              <span>
                {" "}
                <i class="ri-user-fill" />1
              </span>
            </h4>
            <h5 className=" font-medium text-sm">4 mins away</h5>
            <p className="font-medium text-xs text-gray-800">
              Affortable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">
            <i class="ri-money-rupee-circle-fill" />
            90
          </h2>
        </div>
    </div>
  )
}

export default VehiclePanel
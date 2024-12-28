

const CaptainDetails = () => {
  return (
    <div>
    <div className="flex items-center justify-between">
          <div className=" flex items-center justify-start gap-3">
            <img
              className="h-10 w-10 object-cover rounded-full "
              src=" /driver-images.jpg"
              alt=""
            ></img>
            <h4 className=" text-lg font-medium"> Anudip sharma</h4>
          </div>
          <div>
            <h4 className=" text-xl font-semibold">
              <i className=" text-2xl font-medium ri-money-rupee-circle-fill">
                198
              </i>
            </h4>
            <p className="text-sm font-medium text-gray-600">Earned</p>
          </div>
        </div>

        <div className=" mt-3 flex p-3 bg-gray-100 rounded-sm justify-center gap-5 items-center">
          <div className="text-center">
            <i className=" text-2xl mb-2 font-thin ri-time-line"></i>
            <h5 className=" text-lg font-medium">10</h5>
            <p className="text-sm text-gray-700">Hours in day</p>
          </div>
          <div className="text-center">
            <i className=" text-2xl  mb-2font-thin ri-speed-up-line"></i>
            <h5 className=" text-lg font-medium">10</h5>
            <p className="text-sm text-gray-700">Hours in day</p>
          </div>
          <div className="text-center">
            <i className=" text-2xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className=" text-lg font-medium">10</h5>
            <p className="text-sm text-gray-700">Hours in day</p>
          </div>
        </div></div>
  )
}

export default CaptainDetails
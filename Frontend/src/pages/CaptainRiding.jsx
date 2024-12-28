import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import FinishedRide from "../components/FinishedRide";

const CaptainRiding = () => {
  const [finishedRidePanel, setFinishedRidePanel] = useState(false);

  const finishedRidePanelRef = useRef(null);

  useGSAP(
    function () {
      gsap.to(finishedRidePanelRef.current, {
        transform: finishedRidePanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [finishedRidePanel]
  );

  return (
    <div className="h-screen relative flex flex-col justify-end">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="/Uber_logo.png" alt="" />
        <Link
          to="/captain/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
        onClick={() => {
          setFinishedRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[90%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">{"4 KM away"}</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishedRidePanelRef}
        className="fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishedRide setFinishedRidePanel={setFinishedRidePanel} />
      </div>

      <div className="h-screen fixed w-screen top-0 z-[-1]"></div>
    </div>
  );
};

export default CaptainRiding;

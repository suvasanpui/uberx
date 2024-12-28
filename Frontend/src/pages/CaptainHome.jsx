import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useState , useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmedRidePopup from "../components/ConfirmedRidePopup";


const CaptainHome = () => {
  const [ridePopup,setRidePopup]=useState(true)
  const [ConfirmedRidePopupPanel,setConfirmedRidePopupPanel]=useState(false)

  const ridePopupPanelRef = useRef(null);
  const ConfirmedRidePopupPanelRef=useRef(null)

  useGSAP(
    function () {
      gsap.to(ridePopupPanelRef.current, {
        transform: ridePopup ? "translateY(0)" : "translateY(100%)",
      });
    },
    [ridePopup]
  );

  useGSAP(
    function () {
      gsap.to(ConfirmedRidePopupPanelRef.current, {
        transform: ConfirmedRidePopupPanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [ConfirmedRidePopupPanel]
  );

  return (
    <div className=" h-screen">
      <div className=" fixed p-3 top-0 flex  items-center justify-between w-screen">
        <img className=" w-16" src="/Uber_logo.png" alt="map" />
        <div>
          <Link
            to="/home"
            className=" top-2 h-10 w-10 bg-white items-center flex justify-center rounded-full"
          >
            <i className="text-lg font-bold ri-logout-box-r-line"></i>
          </Link>
        </div>
      </div>
      <div className=" h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="/map2-images.gif"
          alt="map"
        />
      </div>

      <div className="h-2/5 px-5 py-5">
        <CaptainDetails/>
      </div>

      <div ref={ridePopupPanelRef} className=" fixed z-10 bottom-0 px-6 py-8  bg-white w-full pt-12 ">
        <RidePopup setRidePopup={setRidePopup} setConfirmedRidePopupPanel={setConfirmedRidePopupPanel}/>
      </div>

      <div ref={ConfirmedRidePopupPanelRef} className=" fixed z-10 bottom-0 px-6 py-8  bg-white w-full pt-12 ">
        <ConfirmedRidePopup setConfirmedRidePopupPanel={setConfirmedRidePopupPanel} setRidePopup={setRidePopup}/>
      </div>

    </div>
  );
};

export default CaptainHome;

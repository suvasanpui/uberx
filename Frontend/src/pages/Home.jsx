import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/confirmedRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanelOpen, setConfirmedRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        height: panelOpen ? "70%" : "0%",
      });
      gsap.to(panelCloseRef.current, {
        opacity: panelOpen ? 1 : 0,
      });
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      gsap.to(vehiclePanelRef.current, {
        transform: vehiclePanelOpen ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      gsap.to(confirmedRideRef.current, {
        transform: confirmedRidePanelOpen
          ? "translateY(0)"
          : "translateY(100%)",
      });
    },
    [confirmedRidePanelOpen]
  );

  useGSAP(
    function () {
      gsap.to(vehicleFoundRef.current, {
        transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
      });
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      gsap.to(waitingForDriverRef.current, {
        transform: waitingForDriverPanel ? "translateY(0)" : "translateY(100%)",
      });
    },
    [waitingForDriverPanel]
  );

  return (
    <div className=" h-screen relative overflow-hidden">
      <img className=" w-16 absolute left-5 top-5" src="Uber_logo.png" />
      <div className=" h-screen w-screen">
        <img className=" h-full w-full object-cover" src="map-images2.png" />
      </div>
      <div className=" h-screen absolute bottom-0 w-full flex flex-col justify-end">
        <div className=" h-[30%] p-6 bg-white relative ">
          <h5
            ref={panelCloseRef}
            className=" absolute top-6 right-5 text-gray-500 text-2xl"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form>
            <div className=" line-clamp-1 absolute h-16 w-1 top-[39%] left-3 bg-gray-800 rounded-full"></div>
            <input
              className=" bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pick u location"
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className=" bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Drop off location"
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>

          <div className=""></div>
        </div>
        <div ref={panelRef} className=" h-[70%] bg-white p-8">
          <LocationSearchPanel
            vehiclePanelOpen={vehiclePanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className=" fixed z-10 bottom-0 px-6 py-8 translate-y-full bg-white w-full pt-12"
      >
        <VehiclePanel
          setConfirmedRidePanelOpen={setConfirmedRidePanelOpen}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      <div
        ref={confirmedRideRef}
        className=" fixed z-10 bottom-0 px-6 py-8 translate-y-full bg-white w-full pt-12"
      >
        <ConfirmedRide
          setConfirmedRidePanelOpen={setConfirmedRidePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className=" fixed z-10 bottom-0 px-6 py-8 translate-y-full bg-white w-full pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        //ref={waitingForDriverRef}
        className=" fixed z-10 bottom-0 px-6 py-8 bg-white w-full pt-12 translate-y-full"
      >
        <WaitingForDriver />
      </div>
    </div>
  );
};

export default Home;

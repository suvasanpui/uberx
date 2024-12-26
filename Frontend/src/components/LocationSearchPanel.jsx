const LocationSearchPanel = ({ vehiclePanelOpen,setVehiclePanelOpen,panelOpen ,setPanelOpen}) => {
  const locationArr = [
    "Kolkata Mini bus stop",
    "24B coloni street",
    "54A green land",
    "Habra 45 g 10",
    "95H sarani coloni",
  ];
  return (
    <div>
      {locationArr.map((ele, index) => {
        return (
          <div  key={index} onClick={()=>{
           
           setVehiclePanelOpen(true),
           setPanelOpen(false)
          }} className=" flex items-center justify-start gap-4 border-2 rounded-lg  p-3 border-gray-100 active:border-black">
            <h2>
              <i className="ri-map-pin-2-fill" />
            </h2>
            <h4 className=" font-medium">{ele}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

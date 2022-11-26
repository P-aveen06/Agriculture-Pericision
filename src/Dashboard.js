import React, { useState } from "react";
import Navbar from "./Components/navbar";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
const Dashboard = () => {
  const [indoor, setIndoor] = useState(60);
  const [outdoor, setOutdoor] = useState(45);
  const [humidity, setHumidity] = useState(34);
  const [state, setState] = useState(false);
  const Temperature = () => {
    return (
      <div className="temperature">
        <p className="text-2 text-blue-100">Temperature</p>
        <div>
          <div className="flex">
            <div className="indoor mt-3 width-400 m-auto text-yellow-300">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3"></div>
                <div className="field col-12 md:col-4 m-auto">
                  <p className="mt-3 text-2">Indoor</p>
                  <Knob
                    value={indoor}
                    valueTemplate={"{value}%"}
                    onChange={(e) => setIndoor(e.indoor)}
                  />
                </div>

                <span className="text-green-500 font-medium">... </span>
                <span className="text-500">..</span>
              </div>
            </div>
            <div className="indoor mt-3 width-400 m-auto">
              <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                <div className="flex justify-content-between mb-3"></div>
                <div className="field col-12 md:col-4 m-auto text-yellow-300">
                  <p className="mt-3 text-2">Outdoor</p>
                  <Knob
                    value={outdoor}
                    valueTemplate={"{value}%"}
                    onChange={(e) => setOutdoor(e.outdoor)}
                  />
                </div>
                <span className="text-green-500 font-medium">... </span>
                <span className="text-500">..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Humidity = () => {
    return (
      <div className="indoor mt-3 width-400 m-auto">
        <p className="text-2 text-blue-100">Humidity</p>
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
          <div className="field col-12 md:col-4 m-auto text-yellow-300">
            <p className="mt-3 text-2">Level</p>
            <Knob
              value={humidity}
              valueTemplate={"{value}%"}
              onChange={(e) => setHumidity(e.outdoor)}
            />
          </div>
          <span className="text-green-500 font-medium">... </span>
          <span className="text-500">..</span>
        </div>
      </div>
    );
  };

  const Proximity = () => {
    return (
      <div className="indoor mt-3 width-200 m-auto">
        <p className="text-2 text-blue-100">Proximity</p>
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
          <div>
            <p className="mt-3 text-2">State</p>
            <Button label="False" className="p-button-danger" id='Proximity' onclick={()=>{
                document.getElementById('proximity').className='p-button-success'
            }}/>
          </div>
          <span className="text-green-500 font-medium">... </span>
          <span className="text-500">..</span>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="mt-2">
        <Navbar />
        <p className="text-3">AGRICULTURE PRECISION</p>
        {/* Temperature */}
        <Temperature />

        {/* Humidity */}
        <Humidity />

        {/* Proximity */}
        <Proximity />
      </div>
    </div>
  );
};
export default Dashboard;

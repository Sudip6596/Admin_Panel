import React from "react";

import { BsDownload } from "react-icons/bs";
import { ImBoxRemove } from "react-icons/im";
import { VscVmActive } from "react-icons/vsc";
import { RiUserLocationLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { useGlobalContext } from "./Context";

function Stats() {
  const { statsData } = useGlobalContext();

  return (
    <div className="stats">
      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <BsDownload />
        </div>
        <div className="stat_details">
          <h3>{statsData.totalInstall}</h3>
          <p>App Installed</p>
        </div>
      </div>
      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <VscVmActive />
        </div>
        <div className="stat_details">
          <h3>{statsData.activeinstall}</h3>
          <p>Active Installs</p>
        </div>
      </div>

      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <GoGraph />
        </div>
        <div className="stat_details">
          <h3>{statsData.churn}%</h3>
          <p>Churn Rate</p>
        </div>
      </div>

      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <ImBoxRemove />
        </div>
        <div className="stat_details">
          <h3>{statsData.totaluninstall}</h3>
          <p>App Un-Installed</p>
        </div>
      </div>
      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <RiUserLocationLine />
        </div>
        <div className="stat_details">
          <h3>{statsData.aliveappusers}</h3>
          <p>Alive App Users</p>
        </div>
      </div>
      <div className="stat">
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "50%",
          }}
        >
          <BsGraphUp />
        </div>
        <div className="stat_details">
          <h3>{statsData.alivechurn}%</h3>
          <p>Alive Churn Rate</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

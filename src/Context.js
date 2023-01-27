import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [statsData, setStatsData] = useState({});
  const [dates, setDates] = useState(["2022-04-01", "2022-08-24"]);
  useEffect(() => {
    fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${dates[0]}&todate=${dates[1]}&page=1&limit=100`
    )
      .then((response) => response.json())
      .then((json) => setData(json.data.data));
    fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${dates[0]}&todate=${dates[1]}&page=1&limit=10`
    )
      .then((response) => response.json())
      .then((json) => setStatsData(json.data));
  }, [dates]);

  return (
    <AppContext.Provider value={{ data, statsData, setDates, dates }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

import { children, createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(city);
  }, [city]);

  const API_KEY = "2c6703700e9842778af80438232704";

  return (
    <DataContext.Provider value={{ city, setCity, data, setData, API_KEY }}>
      {children}
    </DataContext.Provider>
  );
}

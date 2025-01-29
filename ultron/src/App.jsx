import React, { useState, useEffect } from "react"; // ✅ Fix import
import Navbar from "./components/Navbar";
import Central from "./components/Central";
import India from "./components2/India";
import AboutUs from "./components3/AboutUs";

export default function App() {
  const [connection, setConnection] = useState(null);
  const [input, setInput] = useState(""); // 

  useEffect(() => {
    // Fetch data from the Flask backend
    fetch('http://127.0.0.1:5000/api/hello')
      .then(response => response.json())
      .then(data => setConnection(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  console.log(connection)

  return (

    <div className="h-[1000px]">
      <div className="bg-[#0E2944] h-screen py-5">
        <div className="flex flex-col">
          <Navbar />
          <Central />
        </div>
      </div>
      <div className=" bg-[#F7EDCA]">
        <India />
      </div>
      <div className="bg-[#0E2944] pb-10">
        <AboutUs/>
      </div>
      
    </div>
  );
}

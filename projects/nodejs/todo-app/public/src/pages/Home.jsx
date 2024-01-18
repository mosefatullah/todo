import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
 return (
  <div>
   <Navbar />
   <Sidebar>
    <div className="flex justify-center items-center h-screen">
     <h1 className="text-9xl uppercase font-black">Home</h1>
    </div>
   </Sidebar>
  </div>
 );
}

export default Home;

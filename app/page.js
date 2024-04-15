"use client";
import { useState } from "react";

import { Cedarville_Cursive,Montserrat } from "next/font/google";
const cursive = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const monteserrat = Montserrat({ subsets: ["latin"], weight: "400" });

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CounterContainer from "./components/CounterContainer";
import InputText from "./components/InputText";
import Bottombar from "./components/Bottombar";
import HomeContent from "./components/HomeContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <main className="flex  justify-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="max-w-screen-xl w-11/12 h-full ml-16	">
          {/* <Navbar/> */}
        <div className="flex flex-col	justify-center 	 items-center">
          <h1
            className={
              "text-4xl sm:text-2xl md:text-4xl font-bold mt-4 mb-3 text-white"
            }
          >
            Online Sentence Counter
          </h1>
          {/* <Sidebar /> */}
          <CounterContainer content={content} />
          <div className="w-full">
            <InputText content={content} setContent={setContent} />
            <Bottombar content={content} setContent={setContent} />
          </div>
          <div className="mt-6">
            <button className="py-2 px-6 bg-indigo-500 rounded-lg text-white text-2xl">Download Report</button>
          </div>
          <HomeContent />
        </div>
      </div>
    </main>
  );
}

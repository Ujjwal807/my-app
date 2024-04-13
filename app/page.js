"use client";
import { useState } from "react";
import { Inter, Cedarville_Cursive } from "next/font/google";
const cursive = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CounterContainer from "./components/CounterContainer";
import InputText from "./components/InputText";
import Bottombar from "./components/Bottombar";

export default function Home() {
  const [content, setContent] = useState("");

  return (
    <main className="flex justify-center">
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

      <div className="max-w-screen-xl w-full">
        <div className="flex flex-col h-screen	 justify-center 	 items-center">
          <h1
            className={`${cursive.className} ` + "text-4xl font-bold text-white"}
          >
            Counter
          </h1>
          <CounterContainer content={content} />
          <div className="w-full">
            <InputText content={content} setContent={setContent} />
            <Bottombar content={content} setContent={setContent} />
          </div>
        </div>
      </div>
    </main>
  );
}

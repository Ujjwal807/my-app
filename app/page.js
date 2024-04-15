"use client";
import { useState } from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CounterContainer from "./components/CounterContainer";
import InputText from "./components/InputText";
import Bottombar from "./components/Bottombar";
import HomeContent from "./components/HomeContent";


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

      <div className="max-w-screen-xl w-full h-full ">
        <div className="flex flex-col justify-center items-center">
            <p className="text-white py-2 my-6 px-52">Our online sentence counter is a comprehensive tool that accurately counts sentences, words, and characters in your text. It offers unique features like text upload, copy/paste functionality, live character count, highlighting, and downloadable reports to enhance your writing experience and optimize your content for clarity, engagement, and SEO performance.</p>
            <CounterContainer content={content} />
          <div className="w-full min-[320px]:w-11/12">
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

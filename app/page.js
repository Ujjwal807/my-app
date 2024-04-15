"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CounterContainer from "./components/CounterContainer";
import InputText from "./components/InputText";
import Bottombar from "./components/Bottombar";
import HomeContent from "./components/HomeContent";
import jsPDF from "jspdf";

export default function Home() {
  const [content, setContent] = useState("");

    const wordPerMinute = 100;
    let wordCount = content.length === 0 ? 0 : content.trim().split(/\s+/).length;
    const readingTime = wordCount / wordPerMinute;
    const characterCount = content.split("").length;
    const sentenceCount = content.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "").length;
    const paragraphCount = content.length === 0 ? 0 : content.split(/\n{2,}/).length;

    const handleDownloadReport = () => {
        const doc = new jsPDF();

        // Add content to the PDF
        doc.text("Report", 10, 10);
        doc.text(`Total Words: ${wordCount}`, 10, 20);
        doc.text(`Total Characters: ${characterCount}`, 10, 30);
        doc.text(`Total Sentences: ${sentenceCount}`, 10, 40);
        doc.text(`Total Paragraphs: ${paragraphCount}`, 10, 50);
        doc.text(`Total Reading Time: ${readingTime < 1
            ? (readingTime * 60).toFixed(2) + ` s`
            : readingTime + ` m`}`, 10, 60);

        doc.save("report.pdf");

        toast.success("Report downloaded successfully!");
    };

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
            <CounterContainer content={content} />
          <div className="w-full min-[320px]:w-11/12">
            <InputText content={content} setContent={setContent} />
            <Bottombar content={content} setContent={setContent} />
          </div>
          <div className="mt-6">
            <button onClick={handleDownloadReport} className="py-1 px-1 lg:py-2 lg:px-6 bg-indigo-500 rounded-lg text-white lg:text-2xl">Download Report</button>
          </div>
          <HomeContent />
        </div>
      </div>
    </main>
  );
}

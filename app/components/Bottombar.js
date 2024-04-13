import { Document, Page } from "@react-pdf/renderer";
import mammoth from "mammoth";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";

function Bottombar({ content, setContent }) {
  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handleCopy = (e) => {
    e.preventDefault();
    copyTextToClipboard(content);
    toast("Copied to clipboard successfully!!");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      const extension = file.name.split(".").pop().toLowerCase();
      let count = 0;
      switch (extension) {
        case "pdf":
          count = await countWordsFromPDF(content);
          break;
        case "docx":
          count = await countWordsFromDOCX(content);
          break;
        default:
          break;
      }
    //   setWordCount(count);
    //   setCharCount(content.replace(/\s/g, "").length);
    //   setText(content);
    };
    reader.readAsText(file);
  };

  const countWordsFromPDF = async (content) => {
    try {
      const pdfDoc = await Document.create(content);
      let count = 0;
      let ste = "";
      for (let i = 0; i < pdfDoc.numPages; i++) {
        const page = pdfDoc.getPage(i);
        const text = await page.getTextContent();
        console.log(text)
        ste += text;
        count += text.items.length;
      }
      setContent(ste);
      return count;
    } catch (error) {
      console.error("Error reading PDF:", error);
      return 0;
    }
  };

  const countWordsFromDOCX = async (content) => {
    try {
      const result = await mammoth.extractRawText({ buffer: content });
      const text = result.value;
      const words = text.split(/\s+/).filter((word) => word.trim().length > 0);
      return words.length;
    } catch (error) {
      console.error("Error reading DOCX:", error);
      return 0;
    }
  };

  return (
    <div className="w-full backdrop-blur-sm bg-gray-400/20  rounded-lg p-2 mx-2">
      <div className="flex justify-between">
        <div style={{ position: "relative", display: "inline-block" }}>
          <label htmlFor="file-upload">
            <IoCloudUploadSharp color="#fffa" className="m-1" size="2rem" />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
          />
        </div>
        <div className="flex">
          <button onClick={handleCopy}>
            <MdOutlineContentCopy color="#fffa" className="mr-3" size="2rem" />
          </button>
          <button
            onClick={() => {
              setContent("");
              toast("Textarea Cleared successfully!");
            }}
          >
            <GoTrash color="#fffa" size="2rem" className="mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
